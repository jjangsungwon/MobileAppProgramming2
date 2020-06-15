//
//  Extras.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/12.
//  Copyright © 2020 COMP420. All rights reserved.
//

import Foundation

//let API_URL = "http://api.openweathermap.org/data/2.5/weather?lat=\(Location.sharedInstance.latitude!)&lon=\(Location.sharedInstance.longitude!)&APPID=4f3ac3e8b8b5f65451aaf246aa8424d1"

let API_URL = "http://api.openweathermap.org/data/2.5/weather?lat=35.88&lon=128.58&APPID=4f3ac3e8b8b5f65451aaf246aa8424d1"

let FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=\(Location.sharedInstance.latitude!)&lon=\(Location.sharedInstance.longitude!)&appid=4f3ac3e8b8b5f65451aaf246aa8424d1"

typealias DownloadComplete = () -> ()
