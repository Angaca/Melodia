import { ImageBackground, StyleSheet } from "react-native";
import bgImage from "../../style/imgs/WinterSunburst.png";
import React from "react";

const Background = () => {
  return (
    <ImageBackground
      source={require("./../../style/imgs/WinterSunburst.png")}
      style={{ width: "100%", height: "100%" }}
    ></ImageBackground>
  );
};

const style = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
});
export default Background;
