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

/* 2번째 탭에 들어가는 주간 날씨 부분의 Controller */

@IBDesignable
class forecastViewController: UIViewController, CLLocationManagerDelegate{

    // Outlets
    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var mentLabel: UILabel!
    // Constants
    let locationManager = CLLocationManager() // 사용자 위치 가져오기 위한 정의
    // Variables
    var currentWeather: CurrentWeather!
    var currentLocation: CLLocation!
    var forecastWeather: ForecastWeather!
    var forecastArray = [ForecastWeather]()
    
    var countFlag: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        tableView.layer.cornerRadius = 10
        
        currentWeather = CurrentWeather()
        callDelegate()
        setupLocation()
        
        //background color setting
        self.view.backgroundColor = #colorLiteral(red: 0.5361913443, green: 0.6659029126, blue: 0.1537538767, alpha: 1)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        locationAuthCheck()
        if self.countFlag == 0 {
            downloadForecastWeather{
                print("Data Downloaded")

                // 내일 날씨의 안내 메시지
                let tomorrow = self.forecastArray[1].weather
                
                if tomorrow == "Clear"{
                    self.mentLabel.text = "내일은 날씨가 좋아요!"
                }
                else if tomorrow == "Clouds"{
                    self.mentLabel.text = "내일은 흐린 날씨네요"
                }
                else if tomorrow == "Rain"{
                    self.mentLabel.text = "내일 비가 오네요. 우산 챙기세요!"
                }
                else if tomorrow == "Thunderstorm"{
                    self.mentLabel.text = "내일 벼락을 조심하세요."
                }
                else if tomorrow == "Snow"{
                    self.mentLabel.text = "내일 눈이 오니 미끄럼에 주의하세요."
                }
                
            }
            self.countFlag = 1

        }
    }
    
    // location -> (1)
    func callDelegate(){
        locationManager.delegate = self
        tableView.delegate = self
        tableView.dataSource = self
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
        
    }
    
    func downloadForecastWeather(completed: @escaping DownloadComplete){
        Alamofire.request(FORECAST_API_URL).responseJSON{ (response) in
            //print(response)
            let result = response.result
            if let dictionary = result.value as? Dictionary<String, AnyObject> {
                if let list = dictionary["daily"] as? [Dictionary<String, AnyObject>]{
                    for item in list{
                        let forecast = ForecastWeather(weatherDict: item)
                            self.forecastArray.append(forecast)
                    }
                    //self.forecastArray.remove(at: 0)
                    self.tableView.reloadData()
                }
            }
            completed()
        }
    }

}

extension forecastViewController: UITableViewDelegate, UITableViewDataSource{
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ForecastCell") as! ForecastCell
        cell.configureCell(forecastData: forecastArray[indexPath.row])
        return cell
    }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return forecastArray.count
    }
}
