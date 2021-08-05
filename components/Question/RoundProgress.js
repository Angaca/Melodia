import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppStyle from "../../style/App.style";

const RoundProgress = ({ round }) => {
  return <Text style={style.round}>Round {round}/10</Text>;
};

const style = StyleSheet.create({
  round: {
    color: "red",
    backgroundColor: "green",
    fontSize: 16,
  },
});

export default RoundProgress;
