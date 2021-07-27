import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import Answers from "./Answers";
import NextButton from "./NextButton";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import Timer from "./Timer";

const Question = () => {
  return (
    <View style={AppStyle.container}>
      <Text>Melodia</Text>
      <RoundProgress />
      <SongProgress />
      <Timer />
      <NextButton />
      <Answers />
    </View>
  );
};
export default Question;
