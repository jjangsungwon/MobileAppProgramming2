import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card } from 'react-native-elements'

const weatherOption = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: "번개",
      subtitle: "Actually, outside of the house"
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      title: "비",
      subtitle: "For more info look outside"
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "눈",
      subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "",
      subtitle: "",
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
      subtitle: "It's like you have no glasses on."
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Dusty",
      subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: "Just don't go outside."
    },
    Normal: {
      gradient: ["#2DAEF8", "#37CDEF"],
      title: "normal",
      subtitle: "normal",
    }
  };
  
  export default function Weather({ isLoading, name, temp, condition,
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
  }) {
    return (    
      <LinearGradient
        colors={weatherOption[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            size={96}
            name={weatherOption[condition].iconName}
            color="white"
          />
          <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.textContainer}>
            
          <Text style={styles.title}>{weatherOption[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOption[condition].subtitle}
          </Text>
          
          <Text style={styles.temp}>{name}</Text>
        </View>
        <ScrollView vertical={true}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Col><Text style={styles.temp2}>시간대별 날씨</Text></Col>
          </View>

          <View style={styles.elem}>
            <Col><Text style={styles.times}>오전 0시</Text></Col>
            <Col><Text style={styles.temp}>{Math.round(hour_0_temp)}°</Text></Col>
            <Col><Text style={styles.temp}>{weatherOption[hour_0_main].title}</Text></Col>
            <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_0_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 1시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_1_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_1_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_1_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 2시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_2_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_2_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_2_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 3시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_3_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_3_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_3_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 4시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_4_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_4_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_4_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 5시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_5_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_5_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_5_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 6시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_6_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_6_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_6_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 7시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_7_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_7_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_7_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 8시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_8_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_8_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_8_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 9시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_9_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_9_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_9_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 10시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_10_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_10_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_10_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오전 11시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_11_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_11_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_11_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 12시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_12_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_12_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_12_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 1시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_13_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_13_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_13_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 2시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_14_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_14_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_14_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 3시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_15_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_15_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_15_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 4시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_16_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_16_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_16_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 5시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_17_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_17_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_17_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 6시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_18_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_18_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_18_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 7시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_19_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_19_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_19_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 8시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_20_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_20_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_20_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 9시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_21_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_21_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_21_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 10시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_22_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_22_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_22_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>오후 11시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_23_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_23_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_23_main].iconName}
              color="white"
            /></Col>
          </View>

          <View style={styles.elem}>
          <Col><Text style={styles.times}>내일 00시</Text></Col>
          <Col><Text style={styles.temp}>{Math.round(hour_24_temp)}°</Text></Col>
          <Col><Text style={styles.temp}>{weatherOption[hour_24_main].title}</Text></Col>
          <Col><MaterialCommunityIcons
              size={56}
              name={weatherOption[hour_24_main].iconName}
              color="white"
            /></Col>
          </View>
          
      </View>
      </ScrollView>
      </LinearGradient>


    );
  }

  Weather.PropTypes={
      temp:PropTypes.number.isRequired,
      condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
  };

  Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
    ]).isRequired
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    temp: {
      fontSize: 42,
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


  const styles_2 = StyleSheet.create({
    container: {
      padding:5,
      flex: 1,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    header: {
      marginTop:30,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor:'#eee',
      borderBottomWidth:0.5,
      padding: 5,
    },
    elem: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor:'#eee',
      borderBottomWidth:0.5,
      padding: 5,
    },
    times: {
      alignItems: "center",
      fontSize: 15,
      color: "white"
    },
    temp: {
      alignItems: "center",
      fontSize: 22,
      color: "white"
    },
    temp2: {
      alignItems: "center",
      fontSize: 30,
      color: "black"
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