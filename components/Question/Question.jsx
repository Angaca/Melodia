import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import Answers from "./Answers";
import SongProgress from "./SongProgress";
import Timer from "./Timer";

const Question = () => {
  return (
    <View style={AppStyle.container}>
      <Text>Guess this song!</Text>
      <SongProgress />
      <Timer />
      <Answers />
    </View>
  );
};
export default Question;
