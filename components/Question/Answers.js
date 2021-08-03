import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { shuffleArray } from "../../utils/Array";
import { ScoreContext } from "../../context/ScoreContext";
import answerPage from "./answerPageStyle/answerPage.js";
import { FadeInView } from "../Shared/Animations";

const Answers = (props) => {
  const { songs, round, clicked, setClicked } = props;
  const { setScore, countdown } = useContext(ScoreContext);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (songs[round - 1]) {
      const answers = shuffleArray([
        songs[round - 1].name,
        ...songs[round - 1].answers,
      ]);
      setAnswers(answers);
    }
  }, [round]);

  const handleAnswer = (answer) => {
    if (answer === songs[round - 1].name) {
      setScore((currentScore) => currentScore + 10);
    }
    setClicked(true);
  };

  if (!round || !songs.length || countdown) return null;
  return (
    <View style={answerPage.container}>
      <View style={answerPage.answers}>
        {answers.map((answer, index) => (
          <FadeInView key={`answer${index}`}>
            <TouchableOpacity
              disabled={clicked}
              style={
                clicked && answer !== songs[round - 1].name
                  ? answerPage.incorrectBtn
                  : answerPage.button
              }
              onPress={() => handleAnswer(answer)}
            >
              <Text style={answerPage.answerOption}> {answer} </Text>
            </TouchableOpacity>
          </FadeInView>
        ))}
      </View>
    </View>
  );
};

export default Answers;
