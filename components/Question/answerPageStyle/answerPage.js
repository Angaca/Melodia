import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const answerPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    backgroundColor: "goldenrod",
    borderRadius: 10,
  },
  answers: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    width: wp("90%"),
    marginBottom: hp("3%"),
  },

  answerOption: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  incorrectBtn: {
    color: "white",
    fontWeight: "700",
    textDecorationLine: "line-through",
    backgroundColor: "#626174",
    fontSize: 16,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
});

export default answerPageStyle;
