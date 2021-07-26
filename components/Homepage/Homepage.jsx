import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AppStyle from "../../style/App.style";

const Homepage = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <Text style={style.title}>Melodia!</Text>
      <Button
        onPress={() => navigation.navigate("Question")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
