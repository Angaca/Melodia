import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class NextBtn extends React.Component {
  componentDidMount() {
    this.NextBtn.play();
  }

  render() {
    return (
      <LottieView
        style={style.NextBtn}
        ref={(animation) => {
          this.NextBtn = animation;
        }}
        source={require("../../style/animations/submitBtn.json")}
      />
    );
  }
}
const style = StyleSheet.create({
  NextBtn: {
    height: hp("31%"),
    width: wp("31%"),
    alignItems: "center",
  },
});
