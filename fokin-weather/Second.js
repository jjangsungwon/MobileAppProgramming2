import React, {Component} from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';

// add
import { Alert } from "react-native";
import * as Location from "expo-location";
import Loading from './Loading'
import Weather from './Weather'
import Weathers from './Weathers'
import axios from "axios";

// add API_KEY
const API_KEY = "4f3ac3e8b8b5f65451aaf246aa8424d1";

export default class Second extends Component {
    state = {
        isLoading: true
        //search: '',
      };
    
    getLocation_2 = async (latitude, longitude) =>{
        const {
            data: {
                name
            }
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
        );
        this.setState({
            name
        });
    };
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                 hourly
            }
        } = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        this.setState({
            isLoading: false,
            // 0시
            hour_0_temp : hourly[0].temp,         // 온도
            hour_0_main : hourly[0].weather[0].main,    
            hour_0_description : hourly[0].weather[0].description,
            hour_0_icon : hourly[0].weather[0].icon,

            // 1시
            hour_1_temp : hourly[1].temp,         // 온도
            hour_1_main : hourly[1].weather[0].main,
            hour_1_description : hourly[0].weather[0].description,
            hour_1_icon : hourly[1].weather[0].icon,

            // 2시
            hour_2_temp : hourly[2].temp,         // 온도
            hour_2_main : hourly[2].weather[0].main,
            hour_2_description : hourly[0].weather[0].description,
            hour_2_icon : hourly[2].weather[0].icon,

            // 3시
            hour_3_temp : hourly[3].temp,         // 온도
            hour_3_main : hourly[3].weather[0].main,
            hour_3_description : hourly[0].weather[0].description,
            hour_3_icon : hourly[3].weather[0].icon,

            // 4시
            hour_4_temp : hourly[4].temp,         // 온도
            hour_4_main : hourly[4].weather[0].main,
            hour_4_description : hourly[0].weather[0].description,
            hour_4_icon : hourly[4].weather[0].icon,

            // 5시
            hour_5_temp : hourly[5].temp,         // 온도
            hour_5_main : hourly[5].weather[0].main,
            hour_5_description : hourly[0].weather[0].description,
            hour_5_icon : hourly[5].weather[0].icon,

            // 6시
            hour_6_temp : hourly[6].temp,         // 온도
            hour_6_main : hourly[6].weather[0].main,
            hour_6_description : hourly[0].weather[0].description,
            hour_6_icon : hourly[6].weather[0].icon,

            // 7시
            hour_7_temp : hourly[7].temp,         // 온도
            hour_7_main : hourly[7].weather[0].main,
            hour_7_description : hourly[0].weather[0].description,
            hour_7_icon : hourly[7].weather[0].icon,

            // 8시
            hour_8_temp : hourly[8].temp,         // 온도
            hour_8_main : hourly[8].weather[0].main,
            hour_8_description : hourly[0].weather[0].description,
            hour_8_icon : hourly[8].weather[0].icon,

            // 9시
            hour_9_temp : hourly[9].temp,         // 온도
            hour_9_main : hourly[9].weather[0].main,
            hour_9_description : hourly[0].weather[0].description,
            hour_9_icon : hourly[9].weather[0].icon,

            // 10시
            hour_10_temp : hourly[10].temp,         // 온도
            hour_10_main : hourly[10].weather[0].main,
            hour_10_description : hourly[0].weather[0].description,
            hour_10_icon : hourly[10].weather[0].icon,

            // 11시
            hour_11_temp : hourly[11].temp,         // 온도
            hour_11_main : hourly[11].weather[0].main,
            hour_11_description : hourly[0].weather[0].description,
            hour_11_icon : hourly[11].weather[0].icon,

            // 12시
            hour_12_temp : hourly[12].temp,         // 온도
            hour_12_main : hourly[12].weather[0].main,
            hour_12_description : hourly[0].weather[0].description,
            hour_12_icon : hourly[12].weather[0].icon,

            // 13시
            hour_13_temp : hourly[13].temp,         // 온도
            hour_13_main : hourly[13].weather[0].main,
            hour_13_description : hourly[0].weather[0].description,
            hour_13_icon : hourly[13].weather[0].icon,

            // 14시
            hour_14_temp : hourly[14].temp,         // 온도
            hour_14_main : hourly[14].weather[0].main,
            hour_14_description : hourly[0].weather[0].description,
            hour_14_icon : hourly[14].weather[0].icon,

            // 15시
            hour_15_temp : hourly[15].temp,         // 온도
            hour_15_main : hourly[15].weather[0].main,
            hour_15_description : hourly[0].weather[0].description,
            hour_15_icon : hourly[15].weather[0].icon,

            // 16시
            hour_16_temp : hourly[16].temp,         // 온도
            hour_16_main : hourly[16].weather[0].main,
            hour_16_description : hourly[0].weather[0].description,
            hour_16_icon : hourly[16].weather[0].icon,

            // 17시
            hour_17_temp : hourly[17].temp,         // 온도
            hour_17_main : hourly[17].weather[0].main,
            hour_17_description : hourly[0].weather[0].description,
            hour_17_icon : hourly[17].weather[0].icon,

            // 18시
            hour_18_temp : hourly[18].temp,         // 온도
            hour_18_main : hourly[18].weather[0].main,
            hour_18_description : hourly[0].weather[0].description,
            hour_18_icon : hourly[18].weather[0].icon,

            // 19시
            hour_19_temp : hourly[19].temp,         // 온도
            hour_19_main : hourly[19].weather[0].main,
            hour_19_description : hourly[0].weather[0].description,
            hour_19_icon : hourly[19].weather[0].icon,

            // 20시
            hour_20_temp : hourly[20].temp,         // 온도
            hour_20_main : hourly[20].weather[0].main,
            hour_20_description : hourly[0].weather[0].description,
            hour_20_icon : hourly[20].weather[0].icon,

            // 21시
            hour_21_temp : hourly[21].temp,         // 온도
            hour_21_main : hourly[21].weather[0].main,
            hour_21_description : hourly[0].weather[0].description,
            hour_21_icon : hourly[21].weather[0].icon,

            // 22시
            hour_22_temp : hourly[22].temp,         // 온도
            hour_22_main : hourly[22].weather[0].main,
            hour_22_description : hourly[0].weather[0].description,
            hour_22_icon : hourly[22].weather[0].icon,

            // 23시
            hour_23_temp : hourly[23].temp,         // 온도
            hour_23_main : hourly[23].weather[0].main,
            hour_23_description : hourly[0].weather[0].description,
            hour_23_icon : hourly[23].weather[0].icon,

            // 24시
            hour_24_temp : hourly[24].temp,         // 온도
            hour_24_main : hourly[24].weather[0].main,
            hour_24_description : hourly[0].weather[0].description,
            hour_24_icon : hourly[24].weather[0].icon,
        });
    };
    getLocation = async () => {
        try{
            await Location.requestPermissionsAsync(); // 위치 권한 요청
            const {
                coords: { latitude, longitude }
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            this.getLocation_2(latitude, longitude);
        } catch (error) {
            Alert.alert("Can't find you.", "So sad");
        }
    };
    componentDidMount() {
        this.getLocation();
    }
      
    render() {
        const { isLoading,
            hour_0_temp, hour_0_main, hour_0_description, hour_0_icon, // 0시
            hour_1_temp, hour_1_main, hour_1_description, hour_1_icon, // 1시
            hour_2_temp, hour_2_main, hour_2_description, hour_2_icon, // 2시
            hour_3_temp, hour_3_main, hour_3_description, hour_3_icon, // 3시
            hour_4_temp, hour_4_main, hour_4_description, hour_4_icon, // 4시
            hour_5_temp, hour_5_main, hour_5_description, hour_5_icon, // 5시
            hour_6_temp, hour_6_main, hour_6_description, hour_6_icon, // 6시
            hour_7_temp, hour_7_main, hour_7_description, hour_7_icon, // 7시
            hour_8_temp, hour_8_main, hour_8_description, hour_8_icon, // 8시
            hour_9_temp, hour_9_main, hour_9_description, hour_9_icon, // 9시
            hour_10_temp, hour_10_main, hour_10_description, hour_10_icon, // 10시
            hour_11_temp, hour_11_main, hour_11_description, hour_11_icon, // 11시
            hour_12_temp, hour_12_main, hour_12_description, hour_12_icon, // 12시
            hour_13_temp, hour_13_main, hour_13_description, hour_13_icon, // 13시
            hour_14_temp, hour_14_main, hour_14_description, hour_14_icon, // 14시
            hour_15_temp, hour_15_main, hour_15_description, hour_15_icon, // 15시
            hour_16_temp, hour_16_main, hour_16_description, hour_16_icon, // 16시
            hour_17_temp, hour_17_main, hour_17_description, hour_17_icon, // 17시
            hour_18_temp, hour_18_main, hour_18_description, hour_18_icon, // 18시
            hour_19_temp, hour_19_main, hour_19_description, hour_19_icon, // 19시
            hour_20_temp, hour_20_main, hour_20_description, hour_20_icon, // 20시
            hour_21_temp, hour_21_main, hour_21_description, hour_21_icon, // 21시
            hour_22_temp, hour_22_main, hour_22_description, hour_22_icon, // 22시
            hour_23_temp, hour_23_main, hour_23_description, hour_23_icon, // 23시
            hour_24_temp, hour_24_main, hour_24_description, hour_24_icon, // 24시
             } = this.state;
        return  isLoading ? (
            <Loading />
          ) : (
            <Weathers 
                hour_0_temp = {hour_0_temp} hour_0_main = {hour_0_main} hour_0_description = {hour_0_description} hour_0_icon = {hour_0_icon} // 0시
                hour_1_temp = {hour_1_temp} hour_1_main = {hour_1_main} hour_1_description = {hour_1_description} hour_1_icon = {hour_1_icon} // 1시
                hour_2_temp = {hour_2_temp} hour_2_main = {hour_2_main} hour_2_description = {hour_2_description} hour_2_icon = {hour_2_icon} // 2시
                hour_3_temp = {hour_3_temp} hour_3_main = {hour_3_main} hour_3_description = {hour_3_description} hour_3_icon = {hour_3_icon} // 3시
                hour_4_temp = {hour_4_temp} hour_4_main = {hour_4_main} hour_4_description = {hour_4_description} hour_4_icon = {hour_4_icon} // 4시
                hour_5_temp = {hour_5_temp} hour_5_main = {hour_5_main} hour_5_description = {hour_5_description} hour_5_icon = {hour_5_icon} // 5시
                hour_6_temp = {hour_6_temp} hour_6_main = {hour_6_main} hour_6_description = {hour_6_description} hour_6_icon = {hour_6_icon} // 6시
                hour_7_temp = {hour_7_temp} hour_7_main = {hour_7_main} hour_7_description = {hour_7_description} hour_7_icon = {hour_7_icon} // 7시
                hour_8_temp = {hour_8_temp} hour_8_main = {hour_8_main} hour_8_description = {hour_8_description} hour_8_icon = {hour_8_icon} // 8시
                hour_9_temp = {hour_9_temp} hour_9_main = {hour_9_main} hour_9_description = {hour_9_description} hour_9_icon = {hour_9_icon} // 9시
                hour_10_temp = {hour_10_temp} hour_10_main = {hour_10_main} hour_10_description = {hour_10_description} hour_10_icon = {hour_10_icon} // 10시
                hour_11_temp = {hour_11_temp} hour_11_main = {hour_11_main} hour_11_description = {hour_11_description} hour_11_icon = {hour_11_icon} // 11시
                hour_12_temp = {hour_12_temp} hour_12_main = {hour_12_main} hour_12_description = {hour_12_description} hour_12_icon = {hour_12_icon} // 12시
                hour_13_temp = {hour_13_temp} hour_13_main = {hour_13_main} hour_13_description = {hour_13_description} hour_13_icon = {hour_13_icon} // 13시
                hour_14_temp = {hour_14_temp} hour_14_main = {hour_14_main} hour_14_description = {hour_14_description} hour_14_icon = {hour_14_icon} // 14시
                hour_15_temp = {hour_15_temp} hour_15_main = {hour_15_main} hour_15_description = {hour_15_description} hour_15_icon = {hour_15_icon} // 15시
                hour_16_temp = {hour_16_temp} hour_16_main = {hour_16_main} hour_16_description = {hour_16_description} hour_16_icon = {hour_16_icon} // 16시
                hour_17_temp = {hour_17_temp} hour_17_main = {hour_17_main} hour_17_description = {hour_17_description} hour_17_icon = {hour_17_icon} // 17시
                hour_18_temp = {hour_18_temp} hour_18_main = {hour_18_main} hour_18_description = {hour_18_description} hour_18_icon = {hour_18_icon} // 18시
                hour_19_temp = {hour_19_temp} hour_19_main = {hour_19_main} hour_19_description = {hour_19_description} hour_19_icon = {hour_19_icon} // 19시
                hour_20_temp = {hour_20_temp} hour_20_main = {hour_20_main} hour_20_description = {hour_20_description} hour_20_icon = {hour_20_icon} // 20시
                hour_21_temp = {hour_21_temp} hour_21_main = {hour_21_main} hour_21_description = {hour_21_description} hour_21_icon = {hour_21_icon} // 21시
                hour_22_temp = {hour_22_temp} hour_22_main = {hour_22_main} hour_22_description = {hour_22_description} hour_22_icon = {hour_22_icon} // 22시
                hour_23_temp = {hour_23_temp} hour_23_main = {hour_23_main} hour_23_description = {hour_23_description} hour_23_icon = {hour_23_icon} // 23시
                hour_24_temp = {hour_24_temp} hour_24_main = {hour_24_main} hour_24_description = {hour_24_description} hour_24_icon = {hour_24_icon} // 24시
                
            />
        );
    }
}