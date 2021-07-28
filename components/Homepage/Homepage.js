import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import StartButton from "./StartButton";
import Staff from "../../style/imgs/Staff";
// import BackgroundImage from "./../../style/imgs/staff";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Homepage = ({ navigation }) => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={style.welcomeContainer}>
          <Staff height={"50%"} width={"100%"} />
          {/*   <Text style={style.title}>
            melo<Text style={style.musicNote}>𝅘𝅥</Text>ia
          </Text> */}

          <TouchableOpacity
            onPress={() => navigation.navigate("Question")}
            style={style.triangle}
          ></TouchableOpacity>
          <StartButton style={style.triangle} navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "50%",
    height: hp("100%"),
    width: wp("100%"),
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  title: {
    fontSize: hp("8%"),
    textAlign: "center",
    backgroundColor: "transparent",
  },
  musicNote: {
    fontSize: hp("11%"),
  },
  triangle: {
    marginLeft: hp("25%"),
    borderTopWidth: 60,
    borderRightWidth: 0,
    borderBottomWidth: 60,
    borderLeftWidth: 60,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "goldenrod",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Homepage;
