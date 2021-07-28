import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Answers from "./Answers";
import NextButton from "./NextButton";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Question = ({ navigation }) => {
  const [round, setRound] = useState(1);

  return (
    <View style={style.container}>
      <Text>Melodia</Text>
      <RoundProgress round={round} />
      <Answers style={style.answers} />
      <SongProgress round={round}/>
      {round < 10 ? <NextButton setRound={setRound} /> : null}
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  answers: {},
});

export default Question;
