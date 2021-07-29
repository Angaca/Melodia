import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { shuffleArray } from "../../utils/Array";
import { ScoreContext } from "../../context/ScoreContext";
import answerPage from "./answerPageStyle/answerPage.js";

const Answers = (props) => {
  const { songs, round, clicked, setClicked } = props;
  const { setScore } = useContext(ScoreContext);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  if (!round) return null;
  useEffect(() => {
    setAnswers(
      shuffleArray([songs[round - 1].name, ...songs[round - 1].answers])
    );
  }, [round]);

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
    <View style={answerPage.container}>
      <View style={answerPage.answers}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            disabled={clicked}
            style={
              clicked && answer !== songs[round - 1].name
                ? answerPage.incorrectBtn
                : answerPage.button
            }
            key={`answer${index}`}
            onPress={() => handleAnswer(answer)}
          >
            <Text style={answerPage.answerOption}> {answer} </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Answers;
