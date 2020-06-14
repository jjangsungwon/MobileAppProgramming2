//
//  ViewController.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/12.
//  Copyright © 2020 COMP420. All rights reserved.
//

import UIKit
import CoreLocation
import Alamofire

/* 첫번째 화면에 들어가는 정보를 담당하는 컨트롤러 */

class ViewController: UIViewController, CLLocationManagerDelegate{
    
    // Outlets
    @IBOutlet weak var cityName: UILabel!
    @IBOutlet weak var weatherType: UILabel!
    @IBOutlet weak var weatherImage: UIImageView!
    @IBOutlet weak var currentTemp: UILabel!
    @IBOutlet weak var currentDate: UILabel!
    @IBOutlet weak var collectionView: UICollectionView!
    @IBOutlet weak var dust: UILabel!        // 미세먼지
    @IBOutlet weak var uv: UILabel!          // 자외선
    @IBOutlet weak var humidity: UILabel!    // 습도
    @IBOutlet weak var wind: UILabel!        // 바람 세기
    @IBOutlet weak var detailView: UIView!
    
    // Constants
    let locationManager = CLLocationManager() // 사용자 위치 가져오기 위한 정의

    // Variables
    var currentWeather: CurrentWeather!
    var currentLocation: CLLocation!
    
    // For Hourly Variables
    var hourlyWeather: HourlyWeather!
    var hourlyArray = [HourlyWeather]()
    
    var countFlag: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    
        collectionView.layer.shadowColor = UIColor.black.cgColor
        collectionView.layer.shadowOpacity = 1
        collectionView.layer.shadowOffset = CGSize(width: 3, height: 3.0)
        collectionView.layer.shadowRadius = 10
        collectionView.layer.shouldRasterize = true
        
        collectionView.layer.cornerRadius = 10
        detailView.layer.cornerRadius = 10
        
        currentWeather = CurrentWeather()
        callDelegate()
        setupLocation()
        
        // Collection View에 미리 만들어 놓은 Cell을 연결한 부분
        self.collectionView.register(UINib(nibName: "WeatherCollectionViewCell", bundle:nil), forCellWithReuseIdentifier: "WeatherCollectionViewCell")
        
    }
    
    override func viewDidAppear(_ animated: Bool) {
        locationAuthCheck()
        //
        if self.countFlag == 0{
            downloadHourlyWeather{
                print("Data Downloaded")
            }
            self.countFlag = 1
        }
    }
    
    // location -> (1)
    func callDelegate(){
        locationManager.delegate = self
        //
        collectionView.delegate = self
        collectionView.dataSource = self
    }
    
    // location -> (2)
    func setupLocation(){
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.requestWhenInUseAuthorization() // Permission을 유저로부터 받는 부분
        locationManager.startMonitoringSignificantLocationChanges()
    }
    
    // location 동의 여부 체크
    func locationAuthCheck(){
        if CLLocationManager.authorizationStatus() == .authorizedWhenInUse{
            // 스마트폰으로부터 위치 정보를 받아온다.
            currentLocation = locationManager.location
            
            Location.sharedInstance.latitude = currentLocation.coordinate.latitude
            Location.sharedInstance.longitude = currentLocation.coordinate.longitude
            
            // 위치정보를 모두 받은 뒤에, API data를 다운로드받는다.
            currentWeather.downloadCurrentWeather {
                self.updateUI()
            }
            
        }else{ // 유저가 위치정보 기능을 allow하지 않았을 경우, 다시 한번 허가받기
            locationManager.requestWhenInUseAuthorization()
            locationAuthCheck()
        }
    }
    
    // 받아온 데이터들로 업데이트 하는 함수
    func updateUI(){
        cityName.text = currentWeather.cityName
        currentTemp.text = "\(Int(currentWeather.currentTemp))"+"°"
        weatherType.text = currentWeather.weatherType
        currentDate.text = currentWeather.date
        weatherImage.image = UIImage(named: currentWeather.weatherType)
        wind.text = "\(Double(currentWeather.wind))" + "m/s"
        
        //background color setting - case by weatherType
        if currentWeather.weatherType == "Rain"{
            self.view.backgroundColor = #colorLiteral(red: 0.585793674, green: 0.7097141147, blue: 0.7717325091, alpha: 1)
        }
        else if currentWeather.weatherType == "Clouds"{
            self.view.backgroundColor = #colorLiteral(red: 0.5787683725, green: 0.8046938777, blue: 0.9352416396, alpha: 1)
        }
        else if currentWeather.weatherType == "Clear"{
            self.view.backgroundColor = #colorLiteral(red: 0.4146773815, green: 0.821454823, blue: 0.9594151378, alpha: 1)
        }
        else if currentWeather.weatherType == "Thunderstorm"{
            self.view.backgroundColor = #colorLiteral(red: 0.9764705896, green: 0.850980401, blue: 0.5490196347, alpha: 1)
        }
        
        // 자외선
        if (currentWeather.uv <= 2){
            uv.text = "낮음" + "(" + "\(Double(currentWeather.uv))" + ")"
        }
        else if (currentWeather.uv <= 5){
            uv.text = "보통" + "(" + "\(Double(currentWeather.uv))" + ")"
        }
        else if (currentWeather.uv <= 7){
            uv.text = "높음" + "(" + "\(Double(currentWeather.uv))" + ")"
        }
        else if (currentWeather.uv <= 10){
            uv.text = "매우 높음" + "(" + "\(Double(currentWeather.uv))" + ")"
        }
        else{
            uv.text = "위험" + "(" + "\(Double(currentWeather.uv))" + ")"
        }
        
        if (currentWeather.humidity >= 80){
            humidity.text = "높음" + "(" + "\(Double(currentWeather.humidity))" + "%)"
        }
        else{
            humidity.text = "낮음" + "(" + "\(Double(currentWeather.humidity))" + "%)"
        }
    }
    
    // 시간별 날씨예보 받는 부분
    func downloadHourlyWeather(completed: @escaping DownloadComplete){
        Alamofire.request(FORECAST_API_URL).responseJSON{ (response) in
            let result = response.result
            var loopCnt: Int = 0
            if let dictionary = result.value as? Dictionary<String, AnyObject> {
                if let list = dictionary["hourly"] as? [Dictionary<String, AnyObject>]{
                    for item in list{
                        if loopCnt > 13{
                            break
                        }
                        let hourly = HourlyWeather(weatherDict: item)
                        self.hourlyArray.append(hourly)
                        loopCnt += 1
                    }
                    self.hourlyArray.remove(at: 0)
                    self.collectionView.reloadData()
                }
            }
            completed()
        }
    }
    
}

extension ViewController: UICollectionViewDelegate, UICollectionViewDataSource, UICollectionViewDelegateFlowLayout{

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: WeatherCollectionViewCell.identifier, for: indexPath) as! WeatherCollectionViewCell
        cell.configureCell(HourlyData: hourlyArray[indexPath.row])
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return hourlyArray.count
        // .count로 하지 않으면, index out of range 오류가 뜨니 조심하자
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize{
        return CGSize(width:50, height:50)
    }
}
