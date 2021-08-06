import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RoundProgress = ({ round }) => {
  return <Text style={style.round}>Round {round}/10</Text>;
};

const style = StyleSheet.create({
  round: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: hp("3%"),
  },
});

export default RoundProgress;
