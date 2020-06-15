//
//  Extras.swift
//  Weather
//
//  Created by jiwon on 2020/06/14.
//  Copyright © 2020 asqwfq. All rights reserved.
//

import Foundation

let API_URL = "http://api.openweathermap.org/data/2.5/weather?lat=\(Location.sharedInstance.latitude!)&lon=\(Location.sharedInstance.longitude!)&appid=327f3e2ebd751894c79c71b6da843177"
let FORECAST_API_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=\(Location.sharedInstance.latitude!)&lon=\(Location.sharedInstance.longitude!)&cnt=8&appid=327f3e2ebd751894c79c71b6da843177"

typealias DownloadComplete = () -> ()
