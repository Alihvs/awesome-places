import React, { Componenet } from "react";
import { View, Image, Button, StyleSheet, Text } from "react-native";

import imagePlaceholder from "../../assets/beautiful-place.jpg";

class PickLocation extends Componenet {
  render() {
    return (
      <View>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
});

export default PickLocation;
