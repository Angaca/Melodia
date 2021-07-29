import React, { useContext, useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import AppStyle from "../../style/App.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { shuffleArray } from "../../utils/Array";
import { ScoreContext } from "../../context/ScoreContext";

const Answers = (props) => {
  const { songs, round, clicked, setClicked } = props;
  const { setScore } = useContext(ScoreContext);
  const [userAnswer, setUserAnswer] = useState("");

  if (!round) return null;

  const answers = shuffleArray([
    songs[round - 1].name,
    ...songs[round - 1].answers,
  ]);

  useEffect(() => {
    if (userAnswer === songs[round - 1].name) {
      setScore((currentScore) => currentScore + 1);
    }
  }, [userAnswer]);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    setClicked(true);
  };

  return (
    <View style={style.container}>
      <View style={style.answers}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            disabled={clicked}
            style={style.button}
            key={`answer${index}`}
            onPress={() => handleAnswer(answer)}
          >
            <Text style={style.answerOption}> {answer} </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
});
export default Answers;
