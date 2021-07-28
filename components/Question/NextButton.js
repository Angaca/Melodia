import React from "react";
import { Button, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NextButton = ({ setRound }) => {
  const nextRound = () => {
    setRound((currentValue) => {
      if (currentValue >= 10) return currentValue;
      return currentValue + 1;
    });
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
