//
//  ForecastWeather.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/13.
//  Copyright © 2020 COMP420. All rights reserved.
//

import Foundation

class ForecastWeather {
    
    private var _date:String!
    private var _weather:String!
    private var _temp:Double!
    
    var date: String{
        if _date == nil{
            _date = ""
        }
        return _date
    }
    
    var weather: String{
        if _weather == nil{
            _weather = ""
        }
        return _weather
    }
    
    var temp: Double{
        if _temp == nil{
            _temp = 0.0
        }
        return _temp
    }
    
    init(weatherDict: Dictionary<String, AnyObject>){
        if let temp = weatherDict["temp"] as? Dictionary<String, AnyObject>{
            if let dayTemp = temp["day"] as? Double {
                let rawValue = (dayTemp - 273.15).rounded(toPlaces: 0)
                self._temp = rawValue
            }
        }
        if let date = weatherDict["dt"] as? Double{
            let rawDate = Date(timeIntervalSince1970: date)
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "MM-dd"
            
            self._date = dateFormatter.string(from: rawDate)
        }
        if let weather = weatherDict["weather"]![0] as? Dictionary<String, AnyObject>{
            if let main = weather["main"] as? String {
                self._weather = main
            }
        }
    }
    
}
