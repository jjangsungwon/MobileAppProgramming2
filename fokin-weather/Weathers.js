import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weathers({ isLoading, 
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
    name, // 위치
}) {
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text>데이터 확인</Text>
            <Text> { name } </Text>
            
            <Text> 0시 </Text>
            <Text> temp : { hour_0_temp }</Text>
            <Text> main : { hour_0_main }</Text>
            <Text> description : { hour_0_description }</Text>
            <Text> icon : { hour_0_icon}</Text>
            <Text> </Text>

            <Text> 1시 </Text>
            <Text> temp : { hour_1_temp }</Text>
            <Text> main : { hour_1_main }</Text>
            <Text> description : { hour_1_description }</Text>
            <Text> icon : { hour_1_icon}</Text>
            <Text> </Text>

            <Text> 2시 </Text>
            <Text> temp : { hour_2_temp }</Text>
            <Text> main : { hour_2_main }</Text>
            <Text> description : { hour_2_description }</Text>
            <Text> icon : { hour_2_icon}</Text>
            <Text> </Text>

            <Text> 3시 </Text>
            <Text> temp : { hour_3_temp }</Text>
            <Text> main : { hour_3_main }</Text>
            <Text> description : { hour_3_description }</Text>
            <Text> icon : { hour_3_icon}</Text>
            <Text> </Text>

            <Text> 4시 </Text>
            <Text> temp : { hour_4_temp }</Text>
            <Text> main : { hour_4_main }</Text>
            <Text> description : { hour_4_description }</Text>
            <Text> icon : { hour_4_icon}</Text>
            <Text> </Text>

            <Text> 5시 </Text>
            <Text> temp : { hour_5_temp }</Text>
            <Text> main : { hour_5_main }</Text>
            <Text> description : { hour_5_description }</Text>
            <Text> icon : { hour_5_icon}</Text>
            <Text> </Text>

            <Text> 6시 </Text>
            <Text> temp : { hour_6_temp }</Text>
            <Text> main : { hour_6_main }</Text>
            <Text> description : { hour_6_description }</Text>
            <Text> icon : { hour_6_icon}</Text>
            <Text> </Text>

            <Text> 7시 </Text>
            <Text> temp : { hour_7_temp }</Text>
            <Text> main : { hour_7_main }</Text>
            <Text> description : { hour_7_description }</Text>
            <Text> icon : { hour_7_icon}</Text>
            <Text> </Text>

            <Text> 8시 </Text>
            <Text> temp : { hour_8_temp }</Text>
            <Text> main : { hour_8_main }</Text>
            <Text> description : { hour_8_description }</Text>
            <Text> icon : { hour_8_icon}</Text>
            <Text> </Text>

            <Text> 9시 </Text>
            <Text> temp : { hour_9_temp }</Text>
            <Text> main : { hour_9_main }</Text>
            <Text> description : { hour_9_description }</Text>
            <Text> icon : { hour_9_icon}</Text>
            <Text> </Text>

            <Text> 10시 </Text>
            <Text> temp : { hour_10_temp }</Text>
            <Text> main : { hour_10_main }</Text>
            <Text> description : { hour_10_description }</Text>
            <Text> icon : { hour_10_icon}</Text>
            <Text> </Text>

            <Text> 11시 </Text>
            <Text> temp : { hour_11_temp }</Text>
            <Text> main : { hour_11_main }</Text>
            <Text> description : { hour_11_description }</Text>
            <Text> icon : { hour_11_icon}</Text>
            <Text> </Text>

            <Text> 12시 </Text>
            <Text> temp : { hour_12_temp }</Text>
            <Text> main : { hour_12_main }</Text>
            <Text> description : { hour_12_description }</Text>
            <Text> icon : { hour_12_icon}</Text>
            <Text> </Text>

            <Text> 13시 </Text>
            <Text> temp : { hour_13_temp }</Text>
            <Text> main : { hour_13_main }</Text>
            <Text> description : { hour_13_description }</Text>
            <Text> icon : { hour_13_icon}</Text>
            <Text> </Text>

            <Text> 14시 </Text>
            <Text> temp : { hour_14_temp }</Text>
            <Text> main : { hour_14_main }</Text>
            <Text> description : { hour_14_description }</Text>
            <Text> icon : { hour_14_icon}</Text>
            <Text> </Text>

            <Text> 15시 </Text>
            <Text> temp : { hour_15_temp }</Text>
            <Text> main : { hour_15_main }</Text>
            <Text> description : { hour_15_description }</Text>
            <Text> icon : { hour_15_icon}</Text>
            <Text> </Text>

            <Text> 16시 </Text>
            <Text> temp : { hour_16_temp }</Text>
            <Text> main : { hour_16_main }</Text>
            <Text> description : { hour_16_description }</Text>
            <Text> icon : { hour_16_icon}</Text>
            <Text> </Text>

            <Text> 17시 </Text>
            <Text> temp : { hour_17_temp }</Text>
            <Text> main : { hour_17_main }</Text>
            <Text> description : { hour_17_description }</Text>
            <Text> icon : { hour_17_icon}</Text>
            <Text> </Text>

            <Text> 18시 </Text>
            <Text> temp : { hour_18_temp }</Text>
            <Text> main : { hour_18_main }</Text>
            <Text> description : { hour_18_description }</Text>
            <Text> icon : { hour_18_icon}</Text>
            <Text> </Text>

            <Text> 19시 </Text>
            <Text> temp : { hour_19_temp }</Text>
            <Text> main : { hour_19_main }</Text>
            <Text> description : { hour_19_description }</Text>
            <Text> icon : { hour_19_icon}</Text>
            <Text> </Text>

            <Text> 20시 </Text>
            <Text> temp : { hour_20_temp }</Text>
            <Text> main : { hour_20_main }</Text>
            <Text> description : { hour_20_description }</Text>
            <Text> icon : { hour_20_icon}</Text>
            <Text> </Text>

            <Text> 21시 </Text>
            <Text> temp : { hour_21_temp }</Text>
            <Text> main : { hour_21_main }</Text>
            <Text> description : { hour_21_description }</Text>
            <Text> icon : { hour_21_icon}</Text>
            <Text> </Text>

            <Text> 22시 </Text>
            <Text> temp : { hour_22_temp }</Text>
            <Text> main : { hour_22_main }</Text>
            <Text> description : { hour_22_description }</Text>
            <Text> icon : { hour_22_icon}</Text>
            <Text> </Text>

            <Text> 23시 </Text>
            <Text> temp : { hour_23_temp }</Text>
            <Text> main : { hour_23_main }</Text>
            <Text> description : { hour_23_description }</Text>
            <Text> icon : { hour_23_icon}</Text>
            <Text> </Text>

            <Text> 24시 </Text>
            <Text> temp : { hour_24_temp }</Text>
            <Text> main : { hour_24_main }</Text>
            <Text> description : { hour_24_description }</Text>
            <Text> icon : { hour_24_icon}</Text>
            <Text> </Text>
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