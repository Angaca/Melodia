import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import AppStyle from "../../style/App.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Answers = () => {
  return (
    <View style={style.container}>
      <View style={style.answers}>
        <Button title={"Answer 1"} />
        <Button title={"Answer 2"} />
        <Button title={"Answer 3"} />
        <Button title={"Answer 4"} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  answers: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    width: wp("90%"),
    marginBottom: hp("3%"),
  },
});
export default Answers;
