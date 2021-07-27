import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import Answers from "./Answers";
import NextButton from "./NextButton";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import Timer from "./Timer";

const Question = ({ navigation }) => {
  const [round, setRound] = useState(0);

  return (
    <View style={AppStyle.container}>
      <Text>Melodia</Text>
      <RoundProgress round={round} />
      <SongProgress />
      <Timer />
      {round < 10 ? <NextButton setRound={setRound} /> : null}
      <Answers />
      {round === 10 ? (
        <Button
          onPress={() => {
            navigation.navigate("Results");
            setRound(0);
          }}
          title="Results"
        />
      ) : null}
    </View>
  );
};
export default Question;
