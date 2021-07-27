import React from "react";
import { Button, View } from "react-native";
import AppStyle from "../../style/App.style";

const NewGameButton = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <Button
        onPress={() => navigation.navigate("Question")}
        title="New Game"
      />
    </View>
  );
};

export default NewGameButton;
