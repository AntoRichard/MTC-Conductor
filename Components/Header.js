import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from '../Constants/Colors';

const Header = props => {
  return (
    <View style={style.headerView}>
      <Text style={style.headerText}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  headerView: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "white",
    fontSize: 26
  }
});

export default Header;
