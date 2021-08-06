import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const FinalScore = () => {
  const { score, username } = useContext(ScoreContext);
  const resultMessages = [
    "Booo",
    "Not quite my tempo",
    "Encore",
    "Bravo Maestro",
  ];

  const messageIndex = Math.floor(score / 30);
  return (
    <View style={style.message}>
      <Text style={style.rankTitle}>
        {resultMessages[messageIndex]}, {username}
      </Text>
      <Text style={style.score}>You got {`${score}`} out of 100!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  rankTitle: {
    fontSize: hp("4%"),
    color: "white",
    fontWeight: "700",
  },
  score: {
    fontSize: hp("2.5%"),
    color: "white",
    fontWeight: "700",
  },
  message: {
    marginBottom: hp("2.5%"),
  },
});

export default FinalScore;
