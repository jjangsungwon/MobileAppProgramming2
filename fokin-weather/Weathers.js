import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weathers({ isLoading, temp_1, temp_2, temp_3, temp_4, temp_5, temp_6, temp_7, main_1, main_2, main_3, main_4, main_5, main_6, main_7, 
    description_1, description_2, description_3, description_4, description_5, description_6, description_7, name }) {
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text>데이터 확인</Text>
            <Text> { name } </Text>
            <Text> day 1 : { temp_1 }, { main_1 }, { description_1 } </Text>
            <Text> day 2 : { temp_2 }, { main_2 }, { description_2 } </Text>
            <Text> day 3 : { temp_3 }, { main_3 }, { description_3 } </Text>
            <Text> day 4 : { temp_4 }, { main_4 }, { description_4 } </Text>
            <Text> day 5 : { temp_5 }, { main_5 }, { description_5 } </Text>
            <Text> day 6 : { temp_6 }, { main_6 }, { description_6 } </Text>
            <Text> day 7 : { temp_7 }, { main_7 }, { description_7 } </Text>
        </View>
    );
}

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