import React, { Component } from "react";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import { createDrawerNavigator } from "react-navigation-drawer";
import Settings from "../screens/Settings";
export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    Settings: { screen: Settings },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  { initialRouteName: "Home" }
);
