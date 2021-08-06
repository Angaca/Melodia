import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class MusicNotes extends React.Component {
  componentDidMount() {
    this.musicNotes.play();
  }

  render() {
    return (
      <LottieView
        style={style.musicNotes}
        resizeMode="cover"
        loop={false}
        ref={(animation) => {
          this.musicNotes = animation;
        }}
        source={require("../../style/animations/CornerNotes.json")}
      />
    );
  }
}

const style = StyleSheet.create({
  musicNotes: {
    width: wp("50%"),
    height: hp("50%"),
  },
});
