import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card } from 'react-native-elements'

/* Weather.js -> 첫 번째 페이지 */

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "번개",
    subtitle: "낙뢰에 조심하세요"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "이슬비가 내립니다"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비",
    subtitle: "외출하실 때 우산을 꼭 챙기세요"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "미끄럼에 주의하세요"
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
    subtitle: "오늘은 화창한 날입니다"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "구름 많음",
    subtitle: "구름이 많은 날씨입니다"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "박무",
    subtitle: "박무에 주의하세요"
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
    title: "안개",
    subtitle: "안개에 주의하세요"
  },
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
      <Text></Text>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOption[condition].iconName}
          color="white"
        />
        <Text style={styles.tempLarge}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOption[condition].subtitle}
        </Text>
        <Text></Text>
        <Text style={styles.temp}>현재 지역 : {name}</Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.elem}>
          <Row>
            <Col>
              <Text style={styles.times}>현재</Text>
              <Text style={styles.temp}>{Math.round(hour_0_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_0_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_0_main].iconName}
                color="white"
              />
            </Col>

            <Col><Text style={styles.times}>1시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_1_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_1_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_1_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>2시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_2_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_2_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_2_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>3시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_3_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_3_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_3_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>4시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_4_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_4_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_4_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>5시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_5_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_5_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_5_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>6시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_6_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_6_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_6_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>7시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_7_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_7_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_7_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>8시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_8_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_8_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_8_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>9시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_9_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_9_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_9_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>10시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_10_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_10_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_10_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>11시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_11_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_11_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_11_main].iconName}
                color="white"
              /></Col>

            <Col><Text style={styles.times}>12시간 후</Text>
              <Text style={styles.temp}>{Math.round(hour_12_temp)}°</Text>
              <Text style={styles.temp}>{weatherOption[hour_12_main].title}</Text>
              <MaterialCommunityIcons
                size={56}
                style={{textAlign:"center"}}
                name={weatherOption[hour_12_main].iconName}
                color="white"
              /></Col>
          </Row>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

Weather.PropTypes = {
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
    padding: 5,
    flex: 1,
  },
  tempLarge : {
    color: "white",
    fontSize: 64,
    fontWeight: "800",
    textAlign: "center"
  },
  title: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
    textAlign: "left"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    justifyContent: "center",
    flex: 1
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    padding: 5,
  },
  elem: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    borderTopWidth: 2,
    marginRight: 350,
    padding: 5,
    textAlign:"center",
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