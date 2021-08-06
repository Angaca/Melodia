import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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

        <View style={style.results}>
          <Leaderboard />
        </View>
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
    flex: 1,
    flexDirection: "row",
    width: wp("85%"),
    alignItems: "center",
    marginLeft: wp("7.5%"),
    marginTop: hp("7.5%"),
    justifyContent: "space-around",
    borderRadius: 20,
    backgroundColor: "#256EFF",
    elevation: 3,
  },
  btns: {
    flex: 1,
    flexDirection: "row",
    fontSize: hp("6%"),
    height: hp("16%"),
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    width: wp("100%"),
  },
});

export default Results;
