import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WinnerCupAnimation from "../Results/WinnerCupAnimation";

const ResultButton = ({ setClicked, setRound, navigation }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Results");
          setRound(1);
          setClicked(false);
        }}
        title="Results"
      >
        <WinnerCupAnimation />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    marginBottom: hp("2%"),
  },
});

export default ResultButton;
