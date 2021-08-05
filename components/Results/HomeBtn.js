import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class HomeBtn extends React.Component {
  componentDidMount() {
    this.HomeBtn.play();
  }

  render() {
    return (
      <LottieView
        style={style.HomeBtn}
        ref={(animation) => {
          this.HomeBtn = animation;
        }}
        source={require("../../style/animations/yellowHouse.json")}
      />
    );
  }
}

const style = StyleSheet.create({
  HomeBtn: {
    height: hp("10%"),
    width: wp("10%"),

    marginBottom: hp("2%"),
  },
});
