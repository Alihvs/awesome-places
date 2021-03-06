import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <Text>Side Drawer 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "white",
    flex: 1
  }
});

export default SideDrawer;
