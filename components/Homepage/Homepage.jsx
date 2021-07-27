import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import StartButton from "./StartButton";
import Username from "./Username";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Homepage = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <View style={style.textWrapper}>
        <Text style={style.title}>Melodia!</Text>
      </View>
      {/* <Username /> */}
      <StartButton style={style.btn} navigation={navigation} />
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  textWrapper: {
    height: hp("10%"), // 70% of height device screen
    width: wp("100%"), // 80% of width device screen
    marginTop: hp("40%"),
  },
  title: {
    fontSize: hp("5%"), // End result looks like the provided UI mockup
    textAlign: "center",
  },
  btn: {
    height: hp("10%"), // 70% of height device screen
    width: wp("30%"), // 80% of width device screen
  },
});

/* const style = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 10,
  },
}); */

export default Homepage;
