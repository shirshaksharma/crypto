import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

export default class Info extends React.Component {

  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>

          <View style={styles.info}>
            <View style={styles.name}>
              <Text style={styles.bold}>
                {this.props.data.symbol} {" | "}
              </Text>
              <Text>
                {this.props.data.name}
              </Text>
            </View>
            <Text style={styles.bold}>
              ${this.props.data.price_usd}
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={ (this.props.data.percent_change_1h >= 0) ? styles.changePositive:styles.changeNegative }>
              1h: {this.props.data.percent_change_1h}%
            </Text>
            <Text style={ (this.props.data.percent_change_24h >= 0) ? styles.changePositive:styles.changeNegative }>
              24h: {this.props.data.percent_change_24h}%
            </Text>
            <Text style={ (this.props.data.percent_change_7d >= 0) ? styles.changePositive:styles.changeNegative }>
              7d: {this.props.data.percent_change_7d}%
            </Text>
          </View>

        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 100,
    borderBottomWidth: 0.5,
  },
  info:{
    flexDirection: "row",
    justifyContent: "space-around"
  },
  name:{
    flexDirection: "row"
  },
  bold:{
    fontWeight: "bold",
  },
  changePositive:{
    fontSize: 11,
    color: "#9d59ff"
  },
  changeNegative:{
    fontSize: 11,
    color: "#ff4418",
  }

});