import React, { useState } from "react";
import { Button, Text, View, StyleSheet, ImageBackground } from "react-native";
import Answers from "./Answers";
import AppTitle from "../Shared/AppTitle";
import NextButton from "./NextButton";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ResultButton from "./ResultButton";
import { songs } from "../../utils/exampleQuestions";

const Question = ({ navigation }) => {
  const [round, setRound] = useState(1);
  const [clicked, setClicked] = useState(false);

  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={style.top}>
          <AppTitle />
          <RoundProgress round={round} />
          <SongProgress songs={songs} round={round} />
        </View>
        <View style={style.answers}>
          <Answers
            clicked={clicked}
            setClicked={setClicked}
            songs={songs}
            round={round}
            style={style.answers}
          />
        </View>
        <View style={style.nextBtn}>
          {round < 10 ? (
            clicked ? (
              <NextButton setClicked={setClicked} setRound={setRound} />
            ) : (
              <Button color={"transparent"} />
            )
          ) : (
            <ResultButton
              setClicked={setClicked}
              navigation={navigation}
              setRound={setRound}
            />
          )}
        </View>
      </ImageBackground>
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
    height: hp("100%"),
  },
  answers: {
    height: hp("43%"),
  },

  top: {
    height: hp("50%"),
  },
  nextBtn: {
    height: hp("7%"),
  },
});

export default Question;
