import React from "react";
import { useState, useContext } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SubmitBtn from "../Shared/SubmitBtn";

const Username = (props) => {
  const { navigation } = props;
  const { setUsername } = useContext(ScoreContext);
  const [input, setInput] = useState();

  const submit = () => {
    if (input) {
      setUsername(input);
      navigation.navigate("Question");
    }
  };

  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.usernameInput}
        placeholder="Username"
        onChangeText={(text) => setInput(text)}
      ></TextInput>
      <TouchableOpacity onPress={submit} title="Submit">
        <SubmitBtn style={style.submit} />
      </TouchableOpacity>
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
    elevation: 3,
  },
});

export default Username;
