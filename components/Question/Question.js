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

const Question = ({ navigation }) => {
  const [round, setRound] = useState(0);

  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={style.top}>
          <AppTitle />
          <RoundProgress round={round} />
          <SongProgress />
        </View>
        <View style={style.bottom}>
          <Answers />
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
  bottom: {
    height: hp("50%"),
  },

  top: {
    height: hp("50%"),
  },
});

export default Question;
