import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BookDonateScreen from "../screens/BookDonateScreen";
import BookRequestScreen from "../screens/BookRequestScreen";
import { AppStackNavigator } from "../components/AppStackNavigator";
export const AppTabNavigator = createBottomTabNavigator({
  BookDonateScreen: { screen: AppStackNavigator },
  BookRequestScreen: BookRequestScreen,
});
