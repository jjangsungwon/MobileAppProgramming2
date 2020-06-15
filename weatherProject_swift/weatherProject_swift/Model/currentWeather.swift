//
//  currentWeather.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/12.
//  Copyright © 2020 COMP420. All rights reserved.
//

import Foundation
import Alamofire
import SwiftyJSON

class CurrentWeather {
    
    private var _cityName: String!      // 지역 이름
    private var _date: String!          // 날짜
    private var _weatherType: String!   // 날씨 유형
    private var _currentTemp: Double!   // 온도

    private var _uv: Double!            // 자외선
    private var _humidity: Double!      // 습도
    private var _wind: Double!          // 바람 세기
    
    var cityName: String {
        if _cityName == nil{
            _cityName = ""
        }
        return _cityName
    }
    var date: String {
        if _date == nil{
            _date = ""
        }
        return _date
    }
    var weatherType: String {
        if _weatherType == nil{
            _weatherType = ""
        }
        return _weatherType
    }
    var currentTemp: Double {
        if _currentTemp == nil{
            _currentTemp = 0.0
        }
        return _currentTemp
    }
    
    var uv: Double {
        if _uv == nil{
            _uv = 0.0
        }
        return _uv
    }
    
    var humidity: Double {
        if _humidity == nil{
            _humidity = 0.0
        }
        return _humidity
    }
    
    var wind: Double {
        if _wind == nil{
            _wind = 0.0
        }
        return _wind
    }
    
    
    func downloadCurrentWeather(completed: @escaping DownloadComplete){
        Alamofire.request(API_URL).responseJSON { (response) in
            let result = response.result // SUCCESS OR NOT!
            let json = JSON(result.value)
            
            // parsing step!
            self._cityName = json["name"].stringValue
            let tempDate = json["dt"].double
            
            // 올바른 날짜 형식으로 바꿔주기 위한 부분
            let conversionDate = Date(timeIntervalSince1970: tempDate!)
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "YYYY-MM-dd"
            
            let currentDate = dateFormatter.string(from: conversionDate)
            self._date = "\(currentDate)"
            self._weatherType = json["weather"][0]["main"].stringValue // ex : Clouds, Clear, ...
            let downloadedTemp = json["main"]["temp"].double
            self._currentTemp = (downloadedTemp! - 273.15).rounded(toPlaces: 0) // F to C temp
        }
        Alamofire.request(FORECAST_API_URL).responseJSON{ (response) in
            let result = response.result
            let json = JSON(result.value)
            
            // parsing step!
            self._uv = json["current"]["uvi"].double
            self._humidity = json["current"]["humidity"].double
            self._wind = json["current"]["wind_speed"].double
            completed()
        }
    }
    
}