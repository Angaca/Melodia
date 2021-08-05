import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FinalScore from "./FinalScore";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TitleStaff from "./../../style/imgs/GreyLogo.svg";
import PlayBtn from "../Shared/PlayBtn";
import HomeBtn from "./HomeBtn";
import Leaderboard from "./Leaderboard";

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
        {/*  <View style={style.results}>
          <FinalScore />
        </View> */}
        <Leaderboard />
        <View style={style.btns}>
          <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
            <HomeBtn navigation={navigation} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Question")}>
            <PlayBtn navigation={navigation} />
          </TouchableOpacity>
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
    height: hp("45%"),
    width: wp("80%"),
    marginLeft: wp("10%"),
    marginRight: wp("10%"),
    marginTop: wp("15%"),
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#256EFF",
    elevation: 3,
    flex: 1,
    flexDirection: "row",
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
