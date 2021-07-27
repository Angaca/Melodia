import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";

const RoundProgress = ({ round }) => {
  return (
    <View style={AppStyle.container}>
      <Text>Round {round}/10</Text>
    </View>
  );
};

export default RoundProgress;
