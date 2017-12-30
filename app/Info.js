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
                BTC {" | "}
              </Text>
              <Text>
                Bitcoin
              </Text>
            </View>
            <Text style={styles.bold}>
              $12000
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.changePositive}>
              1h: -00.2 %
            </Text>
            <Text style={styles.changeNegative}>
              24h: -0.002%
            </Text>
            <Text style={styles.changePositive}>
              7d: 0.0%
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
    borderBottomWidth: 0.2,

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