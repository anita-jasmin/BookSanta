import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
export default class BookDonateScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestedBookList: [],
    };
    this.requestref = null;
  }
  getRequestedBookList = () => {
    this.requestref = db
      .collection("requested_books")
      .onSnapshot((snapshot) => {
        var requestedBookList = snapshot.docs.map((document) =>
          document.data()
        );
        this.setState({
          requestedBookList: requestedBookList,
        });
      });
  };
  componentDidMount() {
    this.getRequestedBookList();
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, i }) => {
    return (
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.book_name}</ListItem.Title>
          <ListItem.Subtitle>{item.reason_to_request}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.state.requestedBookList.length === 0 ? (
            <View>
              <Text>No Requested Books</Text>
            </View>
          ) : (
            <FlatList
              data={this.state.requestedBookList}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          )}
        </View>
      </View>
    );
  }
}
