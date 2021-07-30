import React from "react";
import { Button, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ResultButton = ({ setClicked, setRound, navigation }) => {
  return (
    <View style={style.container}>
      <Button
        onPress={() => {
          navigation.navigate("Results");
          setRound(0);
          setClicked(false);
        }}
        title="Results"
      />
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
