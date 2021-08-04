import React from "react";
import { Button, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LottieView from "lottie-react-native";

export default class NextBtn extends React.Component {
  componentDidMount() {
    this.nextBtn.play();
  }

  // Btn = ({ setRound, setClicked }) => {
  //   const nextRound = () => {
  //     setRound((currentValue) => {
  //       if (currentValue >= 10) return currentValue;
  //       return currentValue + 1;
  //     });
  //   };

  render() {
    return (
      <LottieView
        style={style.nextBtn}
        ref={(animation) => {
          this.nextBtn = animation;
        }}
        onPress={() => {
          nextRound();
          setClicked(false);
        }}
        source={require("../../style/animations/lottiePlay.json")}
      />
    );
  }
}

const style = StyleSheet.create({
  nextBtn: {
    height: hp("15%"),
    width: wp("15%"),
  },
});
