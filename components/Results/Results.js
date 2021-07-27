import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import FinalScore from "./FinalScore";
import HomeButton from "./HomeButton";
import NewGameButton from "./NewGameButton";

const Results = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <Text>Melodia</Text>
      <FinalScore />
      <View style={AppStyle.container}>
        <NewGameButton navigation={navigation} />
        <HomeButton navigation={navigation} />
      </View>
    </View>
  );
};

export default Results;
