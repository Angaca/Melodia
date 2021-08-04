import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class WinnerCupAnimation extends React.Component {
  componentDidMount() {
    this.WinnerCupAnimation.play();
  }

  render() {
    return (
      <LottieView
        style={style.WinnerCupAnimation}
        ref={(animation) => {
          this.WinnerCupAnimation = animation;
        }}
        source={require("../../style/animations/winnerCup.json")}
      />
    );
  }
}

const style = StyleSheet.create({
  WinnerCupAnimation: {
    height: hp("18%"),
    marginBottom: hp("4%"),
    marginTop: hp("-1.3%"),
  },
});
