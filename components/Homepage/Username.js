import React from "react";
import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Username = (props) => {
  const { setInput } = props;

  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.usernameInput}
        placeholder="Username"
        onChangeText={(text) => setInput(text)}
      ></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: hp("50%"),
  },
  submit: {
    height: hp("15%"),
    width: wp("15%"),
  },
  usernameInput: {
    height: hp("7%"),
    width: wp("56%"),
    borderRadius: 20,
    backgroundColor: "white",
    textAlign: "center",
    elevation: 3,
  },
});

export default Username;
