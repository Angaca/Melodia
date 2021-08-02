import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class SubmitBtn extends React.Component {
  componentDidMount() {
    this.SubmitBtn.play();
  }

  render() {
    return (
      <LottieView
        style={style.SubmitBtn}
        ref={(animation) => {
          this.SubmitBtn = animation;
        }}
        source={require("../../style/animations/lottiePlay.json")}
      />
    );
  }
}
const style = StyleSheet.create({
  SubmitBtn: {
    height: hp("15%"),
    width: wp("15%"),
  },
});
