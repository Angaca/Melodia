import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AppTitle = () => {
  return (
    <Text style={style.title}>
      melo<Text style={style.musicNote}>𝅘𝅥</Text>ia
    </Text>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: hp("8%"),
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  musicNote: {
    fontSize: hp("11%"),
  },
});

export default AppTitle;
