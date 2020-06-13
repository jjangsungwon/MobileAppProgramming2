//
//  ForecastCell.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/13.
//  Copyright © 2020 COMP420. All rights reserved.
//

import UIKit

class ForecastCell: UITableViewCell {
    
    @IBOutlet weak var forecastTemp: UILabel!
    @IBOutlet weak var forecastDay: UILabel!
    @IBOutlet weak var forecastImage: UIImageView!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    func configureCell(forecastData: ForecastWeather){
        self.forecastDay.text = "\(forecastData.date)"
        self.forecastTemp.text = "\(Int(forecastData.temp))" + "°"
        self.forecastImage.image = UIImage(named: forecastData.weather)
        
        //print(forecastData.date, forecastData.temp, forecastData.weather)
    }

}
