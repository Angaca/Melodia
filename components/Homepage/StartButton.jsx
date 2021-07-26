import React from "react";
import { Button, View } from "react-native";
import AppStyle from "../../style/App.style";

const StartButton = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <Button
        onPress={() => navigation.navigate("Question")}
        title="Start"
        color="#841584"
        accessibilityLabel="Start the quiz"
      />
    </View>
  );
};

export default StartButton;
