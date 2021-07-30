import React from "react";
import { useState, useContext } from "react";
import { TextInput, View, Button } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import AppStyle from "../../style/App.style";

const Username = (props) => {
  const { navigation } = props;
  const { setUsername } = useContext(ScoreContext);
  const [input, setInput] = useState();

  const submit = () => {
    console.log(input)
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
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></TextInput>
      <Button onPress={submit} title="Submit" />
    </View>
  );
};

export default Username;
