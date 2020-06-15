//
//  ViewController.swift
//  Weather
//
//  Created by jiwon on 2020/06/14.
//  Copyright © 2020 asqwfq. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    
    @IBOutlet weak var cityName: UILabel!
    @IBOutlet weak var weatherType: UILabel!
    @IBOutlet weak var weatherImage: UIImageView!
    @IBOutlet weak var currentCityTemp: UILabel!
    @IBOutlet weak var currentDate: UILabel!
    @IBOutlet weak var specialBG: UIImageView!
    
    var currentWeather: CurrentWeather!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        applyEffect()
        currentWeather = CurrentWeather()
        currentWeather.downloadCurrentWeather {
            self.updateUI()
        }
    }
    
    func applyEffect(){
        specialEffect(view: specialBG, intensity: 45)
    }

    func specialEffect(view: UIView, intensity: Double) {
        let horizontalMotion = UIInterpolatingMotionEffect(keyPath: "center.x", type: .tiltAlongHorizontalAxis)
        horizontalMotion.minimumRelativeValue = -intensity
        horizontalMotion.maximumRelativeValue = intensity
        
        let verticalMotion = UIInterpolatingMotionEffect(keyPath: "center.y", type: .tiltAlongVerticalAxis)
        verticalMotion.minimumRelativeValue = -intensity
        verticalMotion.maximumRelativeValue = intensity
        
        let movement = UIMotionEffectGroup()
        movement.motionEffects = [horizontalMotion, verticalMotion]
        
        view.addMotionEffect(movement)
    }
    
    func updateUI() {
        cityName.text = currentWeather.cityName
        currentCityTemp.text = "\(Int(currentWeather.currentTemp))"
        weatherType.text = currentWeather.weatherType
        currentDate.text = currentWeather.date
    }

}

