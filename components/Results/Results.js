import React from "react";
import { Text, View, ImageBackground } from "react-native";
import AppStyle from "../../style/App.style";
import FinalScore from "./FinalScore";
import HomeButton from "./HomeButton";
import NewGameButton from "./NewGameButton";

const Results = ({ navigation }) => {
  return (
    <View style={AppStyle.container}>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text>Melodia</Text>
        <FinalScore />
        <View style={AppStyle.container}>
          <NewGameButton navigation={navigation} />
          {/*  <HomeButton navigation={navigation} /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Results;
