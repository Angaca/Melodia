import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { shuffleArray } from "../../utils/Array";
import { ScoreContext } from "../../context/ScoreContext";
import answerPage from "./answerPageStyle/answerPage.js";

const Answers = (props) => {
  const { songs, round, clicked, setClicked } = props;
  const { setScore } = useContext(ScoreContext);
  const [answers, setAnswers] = useState([]);

  if (!round || !songs.length) return null;
  useEffect(() => {
    setAnswers(
      shuffleArray([songs[round - 1].name, ...songs[round - 1].answers])
    );
  }, [round]);

  const handleAnswer = (answer) => {
    if (answer === songs[round - 1].name) {
      setScore((currentScore) => currentScore + 10);
    }
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
