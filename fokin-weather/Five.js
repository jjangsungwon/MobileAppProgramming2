import React from 'react';
import { Alert } from "react-native";
import * as Location from "expo-location";
import Loading from './Loading'
import Weather from './Weather'
import axios from "axios";
import { StyleSheet, Text, View } from 'react-native';

const API_KEY = "e9a536d129048a0e2bd6447fe94c45c6";

export default class Five extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      name
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, name, temp, condition } = this.state;
    console.log(condition);
    return isLoading ? (
      <Loading />
    ) : (
      <Weather name={name} temp={Math.round(temp)} condition={condition} />
    );
  }
}