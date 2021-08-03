import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import AppStyle from "../../style/App.style";
import FinalScore from "./FinalScore";
import HomeButton from "./HomeButton";
import NewGameButton from "./NewGameButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Leaderboard from "./Leaderboard";
import TitleStaff from "./../../style/imgs/altLogo.svg";

const Results = ({ navigation }) => {
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
            marginTop={hp("3.3%")}
            marginBottom={hp("-6%")}
          />
        )}
        <View style={style.results}>
          <FinalScore />
          <Leaderboard />
        </View>
        <View style={style.btns}>
          <NewGameButton navigation={navigation} />
          <HomeButton navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  appTitle: {
    height: hp("20%"),
  },
  results: {
    height: hp("50%"),
    alignItems: "stretch",
  },
  btns: {
    flex: 1,
    flexDirection: "row",
    fontSize: hp("6%"),
    height: hp("30%"),
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    width: wp("100%"),
    marginBottom: hp("1%"),
  },
});

export default Results;
