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

export default class SecondView extends Component {
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
                //main: { temp },
                //weather,
                //city : { name },
                //cnt
                //current : { daily }
                 daily
            }
        } = await axios.get(
            //`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&units=metric&appid=${API_KEY}`
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            //`https://pro.openweathermap.org/data/2.5/climate/month?zip=94040,us&appid=${API_KEY}`
        );
        this.setState({
            isLoading: false,
            // 1일
            temp_1 : daily[0].temp.day, // - 273.15, // 온도
            main_1 : daily[0].weather[0].main, // 날씨
            description_1 : daily[0].weather[0].description, // 상세 날씨

            // 2일
            temp_2 : daily[1].temp.day, // - 273.15,
            main_2 : daily[1].weather[0].main,
            description_2 : daily[1].weather[0].description, 

            // 3일
            temp_3 : daily[2].temp.day, // - 273.15,
            main_3 : daily[2].weather[0].main,
            description_3 : daily[2].weather[0].description, 

            // 4일
            temp_4 : daily[3].temp.day, // - 273.15,
            main_4 : daily[3].weather[0].main,
            description_4 : daily[3].weather[0].description, 

            // 5일
            temp_5 : daily[4].temp.day, // - 273.15,
            main_5 : daily[4].weather[0].main,
            description_5 : daily[4].weather[0].description, 

            // 6일
            temp_6 : daily[5].temp.day, // - 273.15,
            main_6 : daily[5].weather[0].main,
            description_6 : daily[5].weather[0].description, 

            // 7일
            temp_7 : daily[6].temp.day, // - 273.15,
            main_7 : daily[6].weather[0].main,
            description_7 : daily[6].weather[0].description, 
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
        const { isLoading, temp_1, temp_2, temp_3, temp_4, temp_5, temp_6, temp_7, main_1, main_2, main_3, main_4, main_5, main_6, main_7, 
            description_1, description_2, description_3, description_4, description_5, description_6, description_7, name } = this.state;
        return isLoading ? (
            <Loading />
        ) : (
            <Weathers temp_1 = {temp_1} temp_2 = {temp_2} temp_3 = {temp_3} temp_4 = {temp_4} temp_5 = {temp_5} temp_6 = {temp_6} temp_7 = {(temp_7)}
            main_1 = {main_1} main_2 = {main_2} main_3 = {main_3} main_4 = {main_4} main_5 = {main_5} main_6 = {main_6} main_7 = {main_7}
            description_1 = {description_1} description_2 = {description_2} description_3 = {description_3} description_4 = {description_4} 
            description_5 = {description_5} description_6 = {description_6} description_7 = {description_7} name ={name}/>
        );
    }
}