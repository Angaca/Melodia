import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Answers from "./Answers";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ResultButton from "./ResultButton";
import { songs } from "../../utils/exampleQuestions";
import TitleStaff from "./../../style/imgs/GreyLogo.svg";
const Question = ({ navigation }) => {
  const [round, setRound] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
            marginBottom={hp("-9%")}
          />
        )}
        <RoundProgress
          style={{
            fontSize: 30,
            marginTop: hp("15%"),
          }}
          round={round}
        />
        <View style={style.top}>
          <SongProgress
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songs={songs}
            round={round}
            style={{
              marginTop: hp("1.5%"),
            }}
            clicked={clicked}
            setRound={setRound}
            setClicked={setClicked}
          />
          {round === 10 && clicked ? (
            // <NextButton setClicked={setClicked} setRound={setRound} />
            <ResultButton
              setClicked={setClicked}
              navigation={navigation}
              setRound={setRound}
            />
          ) : null}
        </View>
        <View style={style.submitBtn}>
          <View style={style.answers}>
            <Answers
              clicked={clicked}
              setClicked={setClicked}
              setIsPlaying={setIsPlaying}
              songs={songs}
              round={round}
              style={style.answers}
            />
          </View>
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
