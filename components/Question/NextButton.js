import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import AppStyle from "../../style/App.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NextButton = ({ setRound }) => {
  const nextRound = () => {
    setRound((currentValue) => currentValue + 1);
  };

  return (
    <View style={style.container}>
      <Button title="Next" onPress={() => nextRound()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    marginBottom: hp("2%"),
  },
});

export default NextButton;
