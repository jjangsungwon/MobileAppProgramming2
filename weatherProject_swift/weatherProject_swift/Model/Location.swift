//
//  Location.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/12.
//  Copyright © 2020 COMP420. All rights reserved.
//

import Foundation

// 사용자의 현재 위치값을 받아오기 위해 정의한다.

class Location {
    
    static var sharedInstance = Location()
    var longitude: Double!
    var latitude: Double!
    
}
