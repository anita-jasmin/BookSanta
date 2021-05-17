import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BookDonateScreen from "../screens/BookDonateScreen";
import BookRequestScreen from "../screens/BookRequestScreen";
export const AppTabNavigator = createBottomTabNavigator({
  BookDonateScreen: BookDonateScreen,
  BookRequestScreen: BookRequestScreen,
});
