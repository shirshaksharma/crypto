import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
import axios from "axios";
import Info from "./Info";

const API_URL = "https://api.coinmarketcap.com/v1/ticker/";

export default class App extends React.Component {

  state = {
    cryptos: null,
  };

  // Gets the API info before the app renders
  componentWillMount() {
    this.addAPIInfo();
  };

  // Returns a promise of the API call
  callAPI = () => (
    axios.get(API_URL)
  );

  // Adds the received data in the application state
  addAPIInfo = () => {
    let self = this;
    this.callAPI().then(
      res => self.setState({cryptos: res.data}),
    );
  };

  // Renders the loading text
  renderLoading = () => (
    <View style={styles.loading}>
      <Text>Getting the data...</Text>
    </View>
  );

  // Renders the cryptocurrency info
  renderInfo = () => {
    let array = [];
    if (this.state.cryptos) {
      // Adds an Info component for each object in the state to the array
      this.state.cryptos.map(
        crypto => array.push(
          <Info
            key={crypto.rank}
            data={crypto}
          />
        )
      );
    }
    // Returns the list of information in a scrollable view
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {array}
        </ScrollView>
      </View>
    )
  };

  // If the API call is pending, render Loading.
  // If not, render the received information.
  render() {
    if (!this.state.cryptos) {
      return this.renderLoading();
    }
    else {
      return this.renderInfo();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
