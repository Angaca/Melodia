import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class PlayBtn extends React.Component {
  componentDidMount() {
    this.playBtn.play();
  }

  render() {
    return (
      <LottieView
        style={style.playBtn}
        ref={(animation) => {
          this.playBtn = animation;
        }}
        source={require("../../style/animations/lottiePlay.json")}
      />
    );
  }
}
const style = StyleSheet.create({
  playBtn: {
    height: hp("17%"),
    width: wp("17%"),
    alignItems: "center",
  },
});
