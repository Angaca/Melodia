import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class PlayGameBtn extends React.Component {
  componentDidMount() {
    this.playGameBtn.play();
  }

  render() {
    return (
      <LottieView
        style={style.playGameBtn}
        ref={(animation) => {
          this.playGameBtn = animation;
        }}
        source={require("../../style/animations/lottiePlay.json")}
      />
    );
  }
}

const style = StyleSheet.create({
  playGameBtn: {
    height: hp("15%"),
    width: wp("15%"),
    alignItems: "center",
  },
  submit: {
    height: hp("15%"),
    width: wp("15%"),
  },
});
