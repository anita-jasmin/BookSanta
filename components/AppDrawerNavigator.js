import React, { Component } from "react";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import { createDrawerNavigator } from "react-navigation-drawer";
export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  { initialRouteName: "Home" }
);
