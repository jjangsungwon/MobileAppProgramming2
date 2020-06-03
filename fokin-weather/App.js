import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firstpage from './Five';
import secondpage from './Second';
import thirdpage from './Third';

const App = createBottomTabNavigator(
    {
        Five: {screen:firstpage},
        Ten: {screen:secondpage},
        No: {screen:thirdpage},

    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Five') {
            iconName = 'ios-school';
          } else if (routeName === 'Ten') {
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
    }, 
);

export default createAppContainer(App);

