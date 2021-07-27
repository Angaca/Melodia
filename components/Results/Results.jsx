import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import FinalScore from "./FinalScore";
import NewGameButton from "./NewGameButton";

const Results = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <Text>Melodia</Text>
      <FinalScore />
      <NewGameButton navigation={navigation} />
    </View>
  );
};

export default Results;
