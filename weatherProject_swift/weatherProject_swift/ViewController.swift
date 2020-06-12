//
//  ViewController.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/12.
//  Copyright © 2020 COMP420. All rights reserved.
//

import UIKit

@IBDesignable
class ViewController: UIViewController {

    // Outlets
    @IBOutlet weak var cityName: UILabel!
    
    @IBOutlet weak var weatherType: UILabel!
    
    @IBOutlet weak var weatherImage: UIImageView!
    
    @IBOutlet weak var currentTemp: UILabel!
    
    @IBOutlet weak var currentDate: UILabel!
    
    // Constants
    

    // Variables
    var currentWeather: CurrentWeather!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        currentWeather = CurrentWeather()
        currentWeather.downloadCurrentWeather {
           print("Data Downloaded")
        }
        
        //background color setting
        self.view.backgroundColor = #colorLiteral(red: 0.2392156869, green: 0.6745098233, blue: 0.9686274529, alpha: 1)
    }
    

}

