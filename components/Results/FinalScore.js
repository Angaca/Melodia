import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import AppStyle from "../../style/App.style";

const FinalScore = () => {
  const { score } = useContext(ScoreContext);
  const resultMessages = ["Booo", "Not quite my tempo...", "Encore!","Bravo Maestro!"];
  const messageIndex = Math.floor(score / 3)
  return (
    <View style={AppStyle.container}>
      <Text>{resultMessages[messageIndex]}</Text>
      <Text>You got {`${score}`} out of 10!</Text>
    </View>
  );
};

export default FinalScore;
