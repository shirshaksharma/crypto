import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
import axios from "axios";
import Info from "./Info";

const API_URL = "https://api.coinmarketcap.com/v1/ticker/";

export default class App extends React.Component {

  state = {
    cryptos: null,
  };

  componentWillMount() {
    this.addAPIInfo();
  };

  callAPI = () => (
    axios.get(API_URL)
  );

  addAPIInfo = () => {
    let self = this;
    this.callAPI().then(
      res => self.setState({cryptos: res.data}),
    );
  };

  renderLoading = () => (
    <View style={styles.loading}>
      <Text>Getting the data...</Text>
    </View>
  );

  renderInfo = () => {
    let array = [];
    if (this.state.cryptos) {
      this.state.cryptos.map(
        crypto => array.push(
          <Info
            key={crypto.rank}
            data={crypto}
          />
        )
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {array}
        </ScrollView>
      </View>
    )
  };

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
