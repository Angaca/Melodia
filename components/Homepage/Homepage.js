import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";
import TitleStaff from "./../../style/imgs/altLogo.svg";
import Username from "./Username";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import PlayBtn from "../Shared/PlayBtn";

const Homepage = ({ navigation }) => {
  const [showUsername, setShowUsername] = useState(false);
  return (
    <View>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={style.bgImage}
      >
        {Platform.OS !== "web" && (
          <TitleStaff
            width={wp("100%")}
            height={hp("40%")}
            marginTop={hp("3.3%")}
            marginBottom={hp("-6%")}
          />
        )}
        <View style={style.content}>
          {showUsername ? (
            <Username navigation={navigation} />
          ) : (
            <TouchableOpacity onPress={() => setShowUsername(true)}>
              <PlayBtn />
            </TouchableOpacity>
          )}
        </View>
        {/*  <Button
          onPress={() => navigation.navigate("Results")}
          title="results"
        /> */}
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  bgImage: {
    position: "absolute",
    left: 0,
    top: 0,
    height: hp("100%"),
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    height: hp("100%"),
    width: wp("100%"),
  },
});

export default Homepage;
