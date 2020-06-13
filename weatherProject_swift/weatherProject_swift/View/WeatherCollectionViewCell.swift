//
//  WeatherForecastCell.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/13.
//  Copyright © 2020 COMP420. All rights reserved.
//

//
//  WeatherCollectionViewCell.swift
//  weatherProject_swift
//
//  Created by chan on 2020/06/13.
//  Copyright © 2020 COMP420. All rights reserved.
//

import UIKit

class WeatherCollectionViewCell: UICollectionViewCell {
    
    static let identifier = "WeatherCollectionViewCell"
    
    static func nib() -> UINib {
        return UINib(nibName: "WeatherCollectionViewCell", bundle: nil)
    }
    
    @IBOutlet weak var date: UILabel!
    @IBOutlet weak var iconImageView: UIImageView!
    @IBOutlet weak var tempLabel: UILabel!
  
    
    func configureCell(HourlyData: HourlyWeather){
        self.date.text = "\(HourlyData.date)"+"시"
        self.tempLabel.text = "\(Int(HourlyData.temp))"+"°"
        self.iconImageView.image = UIImage(named: HourlyData.weather)
        
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    
}
