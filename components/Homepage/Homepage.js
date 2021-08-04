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
        {Platform.OS !== "web" && (
          <TitleStaff
            width={wp("100%")}
            height={hp("40%")}
            marginTop={hp("3.3%")}
            marginBottom={hp("-6%")}
          />
        )}
        {/*  <Button
          onPress={() => navigation.navigate("Results")}
          title="results"
        /> */}
        <View style={style.content}>
          {showUsername ? (
            <Username navigation={navigation} style={style.username} />
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
    marginTop: hp("-34%"),
    height: hp("100%"),
    width: wp("100%"),
  },
});

export default Homepage;
