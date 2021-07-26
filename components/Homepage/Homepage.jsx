import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import StartButton from "./StartButton";
import Username from "./Username";

const Homepage = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <Text style={style.title}>Melodia!</Text>
      <Username />
      <StartButton navigation={navigation} />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 10,
  },
});

export default Homepage;
