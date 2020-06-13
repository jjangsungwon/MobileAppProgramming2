//
//  ViewController.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/12.
//  Copyright © 2020 COMP420. All rights reserved.
//

import UIKit
import CoreLocation

/* 첫번째 화면에 들어가는 정보를 담당하는 컨트롤러 */

@IBDesignable
class ViewController: UIViewController, CLLocationManagerDelegate{

    // Outlets
    @IBOutlet weak var cityName: UILabel!
    
    @IBOutlet weak var weatherType: UILabel!
    
    @IBOutlet weak var weatherImage: UIImageView!
    
    @IBOutlet weak var currentTemp: UILabel!
    
    @IBOutlet weak var currentDate: UILabel!
    
    // Constants
    let locationManager = CLLocationManager() // 사용자 위치 가져오기 위한 정의
    

    // Variables
    var currentWeather: CurrentWeather!
    var currentLocation: CLLocation!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        currentWeather = CurrentWeather()
        callDelegate()
        setupLocation()
        
        //background color setting
        self.view.backgroundColor = #colorLiteral(red: 0.2392156869, green: 0.6745098233, blue: 0.9686274529, alpha: 1)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        locationAuthCheck()
    }
    
    // location -> (1)
    func callDelegate(){
        locationManager.delegate = self
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
        currentTemp.text = "\(Int(currentWeather.currentTemp))"
        weatherType.text = currentWeather.weatherType
        currentDate.text = currentWeather.date
    }

}

