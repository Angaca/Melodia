import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import TitleStaff from "./../../style/imgs/TitleStaffSmooth.svg";
import BackgroundImage from "./../../style/imgs/staff.svg";
import { FadeInView } from "./Animations";
import Username from "./Username";
import LottieView from "lottie-react-native";
import AppTitle from "../Shared/AppTitle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import PlayBtn from "../Shared/PlayBtn";

const Homepage = ({ navigation }) => {
  const [showUsername, setShowUsername] = useState(false);
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={style.welcomeContainer}>
          {Platform.OS !== "web" && (
            <TitleStaff height={"50%"} width={"100%"} />
          )}

          {showUsername ? (
            <Username navigation={navigation} />
          ) : (
            <TouchableOpacity onPress={() => setShowUsername(true)}>
              <PlayBtn />
            </TouchableOpacity>
          )}
        </View>

        <Button
          onPress={() => navigation.navigate("Results")}
          title="results"
        />
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
  playBtn: {
    height: hp("60%"),
    width: wp("60%"),
    alignItems: "center",
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

  triangle: {
    marginLeft: hp("25%"),
    borderTopWidth: 60,
    borderRightWidth: 0,
    borderBottomWidth: 60,
    borderLeftWidth: 60,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "#E0B318",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Homepage;
