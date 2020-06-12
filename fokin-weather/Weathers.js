import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card } from 'react-native-elements'
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "번개",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#D7D2CC", "#304352"],
    title: "비",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "맑음",
    subtitle: "맑음"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "구름 많음",
    subtitle: "흐림"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
  },
  Normal: {
    gradient: ["#2DAEF8", "#37CDEF"],
    title: "normal",
  }
};


export default function Weathers({ isLoading, temp_1, temp_2, temp_3, temp_4, temp_5, temp_6, temp_7, main_1, main_2, main_3, main_4, main_5, main_6, main_7, 
  description_1, description_2, description_3, description_4, description_5, description_6, description_7 // 위치
}) {
  return (
    <LinearGradient
      colors={weatherOption[main_1].gradient}
      style={styles.container}
    >  
      <View style={styles.container}>
          <View style={styles.header2}>
              <Col><Text style={styles.temp2}>주간날씨</Text></Col>
          </View>
          <View style={styles.elem}>
              <Col><Text style={styles.temp3}>Week forecast</Text></Col>
          </View>

          <View style={styles.elem}>
            <Col><Text style={styles.times}>오늘</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(temp_1)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[main_1].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              style={{textAlign:"center"}}
              name={weatherOption[main_1].iconName}
              color="white"
            /></Col>
          </View>
          <View style={styles.elem}>
            <Col><Text style={styles.times}>내일</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(temp_2)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[main_2].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              style={{textAlign:"center"}}
              name={weatherOption[main_2].iconName}
              color="white"
            /></Col>
          </View>
          <View style={styles.elem}>
            <Col><Text style={styles.times}>모레</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(temp_3)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[main_3].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              style={{textAlign:"center"}}
              name={weatherOption[main_3].iconName}
              color="white"
            /></Col>
          </View>
          <View style={styles.elem}>
            <Col><Text style={styles.times}>4일뒤</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(temp_4)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[main_4].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              style={{textAlign:"center"}}
              name={weatherOption[main_4].iconName}
              color="white"
            /></Col>
          </View>
          <View style={styles.elem}>
            <Col><Text style={styles.times}>5일뒤</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(temp_5)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[main_5].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              style={{textAlign:"center"}}
              name={weatherOption[main_5].iconName}
              color="white"
            /></Col>
          </View>
          <View style={styles.elem}>
            <Col><Text style={styles.times}>6일뒤</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(temp_6)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[main_6].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              style={{textAlign:"center"}}
              name={weatherOption[main_6].iconName}
              color="white"
            /></Col>
          </View>
          <View style={styles.elem}>
            <Col><Text style={styles.times}>7일뒤</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(temp_7)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[main_7].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              style={{textAlign:"center"}}
              name={weatherOption[main_7].iconName}
              color="white"
            /></Col>
          </View>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:5,
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    marginTop:70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
    marginBottom:30,
  },
  header2: {
    textAlign:"center",
    marginTop:70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom:30,
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  times: {
    textAlign:"center",
    alignItems: "center",
    fontSize: 15,
    color: "white"
  },
  temp: {
    textAlign:"center",
    alignItems: "center",
    fontSize: 22,
    color: "white"
  },
  temp2: {
    textAlign:"center",
    alignItems: "center",
    fontWeight: 'bold',
    fontSize: 45,
    color: "white"
  },
  temp3: {
    marginTop:-30,
    textAlign:"center",
    marginLeft: 5,
    alignItems: "center",
    fontSize: 20,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});