import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import BookDonateScreen from "../screens/BookDonateScreen";
import ReceiverDetailsScreen from "../screens/ReceiverDetailsScreen";
export const AppStackNavigator = createStackNavigator(
  {
    BookDonateList: {
      screen: BookDonateScreen,
      navigationOptions: { headerShown: false },
    },
    ReceiverDetails: { screen: ReceiverDetailsScreen },
  },
  {
    initialRouteName: "BookDonateList",
  }
);
