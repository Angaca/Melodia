import React from "react";
import { Button, Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import Answers from "./Answers";
import NextButton from "./NextButton";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import Timer from "./Timer";

const Question = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <Text>Melodia</Text>
      <RoundProgress />
      <SongProgress />
      <Timer />
      <NextButton />
      <Answers />
      <Button onPress={() => navigation.navigate("Results")} title="Results" />
    </View>
  );
};
export default Question;
