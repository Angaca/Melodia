import React from "react";
import { Button, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LottieView from "lottie-react-native";

const NextBtn = ({ setRound, setClicked }) => {
  componentDidMount();
  {
    this.NextBtn.play();
  }

  const nextRound = () => {
    setRound((currentValue) => {
      if (currentValue >= 10) return currentValue;
      return currentValue + 1;
    });
  };

  return (
    <LottieView
      style={style.NextBtn}
      ref={(animation) => {
        this.NextBtn = animation;
      }}
      onPress={() => {
        nextRound();
        setClicked(false);
      }}
      source={require("../../style/animations/lottiePlay.json")}
    />
  );
};

const style = StyleSheet.create({
  NextBtn: {
    height: hp("15%"),
    width: wp("15%"),
  },
});

export default NextBtn;
