import React from "react";
import { TextInput, View } from "react-native";
import AppStyle from "../../style/App.style";

const Username = () => {
  return (
    <View style={AppStyle.container}>
      <TextInput
        style={AppStyle.textInput}
        placeholder="Enter your username"
      ></TextInput>
    </View>
  );
};

export default Username;
