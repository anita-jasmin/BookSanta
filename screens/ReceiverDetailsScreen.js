import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

export default class ReceiverDetailsScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      receiverId: this.props.navigation.getParam("details")["user_id"],
      bookName: this.props.navigation.getParam("details")["book_name"],
      reasonForRequest:
        this.props.navigation.getParam("details")["reason_to_request"],
      requestId: this.props.navigation.getParam("details")["request_id"],
      receiverName: "",
      receiverContact: "",
      receiverAddress: "",
      receiverRequestDocId: "",
    };
  }
  getReceiverDetails() {
    db.collection("users")
      .where("email_id", "==", this.state.receiverId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            receiverName: doc.data().first_name,
            receiverContact: doc.data().phone_number,
            receiverAddress: doc.data().address,
          });
        });
      });
  }
  updateBookStatus = () => {
    db.collection("all_donations").add({
      book_name: this.state.bookName,
      request_id: this.state.requestId,
      receiver_id: this.state.receiverId,
      requested_by: this.state.receiverName,
      donor_id: this.state.userId,
    });
  };
  componentDidMount() {
    this.getReceiverDetails();
  }
  render() {
    return (
      <View>
        <Card>
          <Card>
            <Text>{this.state.bookName}</Text>
          </Card>
        </Card>
      </View>
    );
  }
}
