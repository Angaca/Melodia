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
import TitleStaff from "./../../style/imgs/simpleLogo.svg";
import Username from "./Username";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import PlayBtn from "../Shared/PlayBtn";
import { Auth } from "aws-amplify";

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
import QuestionAnimation from "../Shared/PlayBtn";

const Homepage = ({ navigation }) => {
  const [showUsername, setShowUsername] = useState(false);
  return (
    <View>
      <ImageBackground
        source={require("./../../style/imgs/WinterSunburst.png")}
        style={style.bgImage}
      >
        <View style={style.content}>
          {Platform.OS !== "web" && (
            <TitleStaff
              width={wp("100%")}
              height={hp("40%")}
              marginTop={hp("-2%")}
            />
          )}

          {showUsername ? (
            <Username navigation={navigation} />
          ) : (
            <TouchableOpacity onPress={() => setShowUsername(true)}>
              {/* <PlayBtn /> */}
              <Button title="signout" onPress={() => signOut()} />
            </TouchableOpacity>
          )}
          <Button
            title="results"
            onPress={() => navigation.navigate("Results")}
          />
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
