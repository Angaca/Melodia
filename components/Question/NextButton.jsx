import React from "react";
import { Button, View } from "react-native";
import AppStyle from "../../style/App.style";

const NextButton = () => {
  return (
    <View style={AppStyle.container}>
      <Button title="Next" />
    </View>
  );
};

export default NextButton;
