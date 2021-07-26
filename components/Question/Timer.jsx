import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";

const Timer = () => {
  return (
    <View style={AppStyle.container}>
      <Text>Time Left: 00:23</Text>
    </View>
  );
};

export default Timer;
