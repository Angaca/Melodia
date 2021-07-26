import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Homepage = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Melodia!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    marginTop: "1rem",
  },
});

export default Homepage;
