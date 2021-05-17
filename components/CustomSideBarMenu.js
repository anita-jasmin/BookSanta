import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import firebase from "firebase";
export default class CustomSideBarMenu extends Component {
  render() {
    return (
      <View>
        <View>
          <DrawerItems {...this.props} />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
              console.log("press working");
            }}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
