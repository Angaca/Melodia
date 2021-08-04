import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Answers from "./Answers";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ResultButton from "./ResultButton";
import { songs } from "../../utils/exampleQuestions";
import SubmitBtn from "../Shared/SubmitBtn";

import TitleStaff from "./../../style/imgs/altLogo.svg";
// import NextBtn from "./NextBtn";
import NextButton from "./NextButton";
import NextBtn from "./NextBtn";
const Question = ({ navigation }) => {
  const [round, setRound] = useState(1);
  const [clicked, setClicked] = useState(false);

  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {Platform.OS !== "web" && (
          <TitleStaff
            width={wp("100%")}
            height={hp("40%")}
            marginTop={hp("1%")}
            marginBottom={hp("-9%")}
          />
        )}
        <View style={style.top}>
          {/*  <RoundProgress round={round} /> */}
          <SongProgress
            songs={songs}
            round={round}
            clicked={clicked}
            setRound={setRound}
            setClicked={setClicked}
          />
        </View>
        <View style={style.submitBtn}>
          <View style={style.answers}>
            <Answers
              clicked={clicked}
              setClicked={setClicked}
              songs={songs}
              round={round}
              style={style.answers}
            />
          </View>
          {round < 10 ? (
            clicked ? (
              <TouchableOpacity
                onPress={() => {
                  setRound((currentValue) => {
                    if (currentValue >= 10) return currentValue;
                    return currentValue + 1;
                  });
                  setClicked(false);
                }}
              >
                <SubmitBtn />
              </TouchableOpacity>
            ) : null
          ) : clicked ? (
            // <NextButton setClicked={setClicked} setRound={setRound} />
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
    marginBottom: hp("-4%"),
  },
  answers: {
    height: hp("43%"),
    marginBottom: hp("-4%"),
  },

  top: {
    height: hp("20%"),
  },
  submitBtn: {
    height: hp("3%"),
    alignItems: "center",
  },
});

export default Question;
