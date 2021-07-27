import React from "react";
import { Button, View } from "react-native";
import AppStyle from "../../style/App.style";

const NextButton = ({ setRound }) => {
  const nextRound = () => {
    setRound((currentValue) => currentValue + 1);
  };

  return (
    <View style={AppStyle.container}>
      <Button title="Next" onPress={() => nextRound()} />
    </View>
  );
};

export default NextButton;
