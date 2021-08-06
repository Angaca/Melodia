import React, { useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TitleStaff from "./../../style/imgs/GreyLogo.svg";
import Username from "./Username";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import PlayGameBtn from "../Shared/PlayGameBtn";
import { ScoreContext } from "../../context/ScoreContext";
import MusicNotes from "../Shared/MusicNotes";

const Homepage = ({ navigation }) => {
  const { setUsername } = useContext(ScoreContext);
  const [input, setInput] = useState();

  const submit = () => {
    if (input) {
      setUsername(input);
    }
    navigation.navigate("Question");
  };

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
          <View style={style.inputContainer}>
            <Username setInput={setInput} style={style.username} />
            <TouchableOpacity onPress={submit}>
              <PlayGameBtn />
            </TouchableOpacity>
          </View>
        </View>
        <MusicNotes />
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
    marginTop: hp("14%"),
    height: hp("15%"),
    width: wp("100%"),
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: hp("10%"),
  },
});

export default Homepage;
