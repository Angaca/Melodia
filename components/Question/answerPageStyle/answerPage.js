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
  correctBtn: {
    color: "white",
    fontWeight: "700",
    textDecorationLine: "line-through",
    backgroundColor: "#028A58",
    fontSize: 16,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  incorrectBtnSelected: {
    color: "black",
    fontWeight: "700",
    textDecorationLine: "line-through",
    backgroundColor: "#B73239",
    fontSize: 16,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#256EFF",
    borderRadius: 10,
    elevation: 3,
  },
  answers: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    width: wp("90%"),
    marginBottom: hp("1%"),
    marginTop: hp("-2%"),
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
