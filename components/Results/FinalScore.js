import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";

const FinalScore = () => {
  return (
    <View style={AppStyle.container}>
      <Text>Bravo Maestro!</Text>
      <Text>You got 3 out of 10!</Text>
    </View>
  );
};

export default FinalScore;
