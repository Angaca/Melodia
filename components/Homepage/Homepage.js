import React, { useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Button,
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
        <Button
          onPress={() => navigation.navigate("Results")}
          title="results"
        />
        <View style={style.content}>
          <TouchableOpacity onPress={submit}>
            <PlayGameBtn />
          </TouchableOpacity>
          <Username setInput={setInput} style={style.username} />
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
