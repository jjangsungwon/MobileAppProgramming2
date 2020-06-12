import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firstpage from './Five';
import secondpage from './SecondView';
import thirdpage from './Third';

const App = createBottomTabNavigator(
    {
        First: {screen:firstpage},
        Second: {screen:secondpage},
        No: {screen:thirdpage},
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
       
        tabBarIcon: ({horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'First') {
            iconName = 'ios-school';
          } else if (routeName === 'Second') {
            iconName = 'ios-school';
          } else if (routeName === 'No') {
            iconName = 'ios-car';
          }
          return (
            <Ionicons
              name={iconName}
              size={horizontal ? 20 : 25}
              color={tintColor}
            />
          );
        },
      }),
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'black',
        },
      },
    }, 
);

export default createAppContainer(App);

