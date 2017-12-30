import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
import axios from "axios";
import Info from "./Info";

const API_URL = "https://api.coinmarketcap.com/v1/ticker/";

export default class App extends React.Component {

  state = {
    crypto: null,
  };

  componentWillMount(){
    //this.addAPIInfo();
  };

  // Returns a promise of the API call
  callAPI = () => (
    axios.get(API_URL)
  );

  addAPIInfo = () => {
    let self = this;
    this.callAPI().then(
      res => self.setState({crypto: res.data})
    );
  };



  render() {
    console.log(this.state.crypto);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Info/>
          <Info/>
          <Info/>
          <Info/>
          <Info/>
          <Info/>
          <Info/>
          <Info/>
          <Info/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  scrollContainer: {
  }
});
