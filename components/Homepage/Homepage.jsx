import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartButton from "./StartButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Staff from "../../style/imgs/Staff";

const Homepage = ({ navigation }) => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={style.welcomeContainer}>
          <Text style={style.title}>Melodia</Text>
          <View style={style.triangle}></View>
          <StartButton style={style.btn} navigation={navigation} />
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
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "80%",
    height: hp("100%"),
    width: wp("100%"),
  },
  title: {
    fontSize: hp("8%"),
    textAlign: "center",
    backgroundColor: "transparent",
  },

  btn: {
    height: hp("10%"),
    width: wp("30%"),
    backgroundColor: "transparent",
  },

  triangle: {
    borderTopWidth: 60,
    borderRightWidth: 0,
    borderBottomWidth: 60,
    borderLeftWidth: 60,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "goldenrod",
  },
});

export default Homepage;
