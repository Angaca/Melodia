import React from "react";
import { useState, useContext } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import AppStyle from "../../style/App.style";

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
    <View style={AppStyle.container}>
      <TextInput
        style={AppStyle.textInput}
        placeholder="Enter your username"
        onChangeText={text => setInput(text)} 
      ></TextInput>
      <TouchableOpacity onPress={submit} title="Submit" height={50} width={250}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Username;
