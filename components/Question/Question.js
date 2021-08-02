import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
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
import SubmitBtn from "../Shared/SubmitBtn";
import TitleStaff from "./../../style/imgs/simpleLogo.svg";
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
          <RoundProgress round={round} />
          {Platform.OS !== "web" && (
            <TitleStaff style={style.appLogo} width={wp("100%")} />
          )}
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
        <View style={style.submitBtn}>
          {round < 10 ? (
            clicked ? (
              <SubmitBtn setClicked={setClicked} setRound={setRound} />
            ) : null
          ) : clicked ? (
            <ResultButton
              setClicked={setClicked}
              navigation={navigation}
              setRound={setRound}
            />
          ) : null}
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

  appLogo: {
    height: hp("40%"),
    marginTop: hp("-20%"),
    marginBottom: hp("-6%"),
  },
  answers: {
    height: hp("43%"),
    marginTop: hp("-3%"),
    marginBottom: hp("-2%"),
  },

  top: {
    height: hp("50%"),
  },
  submitBtn: {
    height: hp("3%"),
    alignItems: "center",
  },
});

export default Question;
