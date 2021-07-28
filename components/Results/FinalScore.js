import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import AppStyle from "../../style/App.style";

const FinalScore = () => {
  const { score } = useContext(ScoreContext);

  return (
    <View style={AppStyle.container}>
      <Text>Bravo Maestro!</Text>
      <Text>You got {`${score}`} out of 10!</Text>
    </View>
  );
};

export default FinalScore;
