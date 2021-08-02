import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Button,
} from "react-native";
import TitleStaff from "./../../style/imgs/TitleStaffSmooth.svg";
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
        <View style={style.content}>
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
  bgImage: {
    width: "100%",
    height: "100%",
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
