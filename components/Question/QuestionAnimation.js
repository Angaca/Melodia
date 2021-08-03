import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class QuestionAnimation extends React.Component {
  componentDidMount() {
    this.QuestionAnimation.play();
  }

  render() {
    return (
      <LottieView
        style={style.SubmitBtn}
        loop={false}
        ref={(animation) => {
          this.QuestionAnimation = animation;
        }}
        source={require("../../style/animations/question.json")}
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
