import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import AppStyle from "../../style/App.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const FinalScore = () => {
  const { score } = useContext(ScoreContext);

  return (
    <View style={AppStyle.container}>
      <Text style={style.rankTitle}>Bravo Maestro</Text>
      <Text style={style.score}>You got {`${score}`} out of 10!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  rankTitle: {
    fontSize: hp("6%"),
    color: "#E0B318",
    fontWeight: 800,
  },
  score: {
    fontSize: hp("3%"),
    color: "white",
    fontWeight: 800,
  },
});

export default FinalScore;
