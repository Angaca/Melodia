import React, { useEffect } from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import MediaPlayer from "./MediaPlayer";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useState } from "react";

const SongProgress = () => {
  const [duration, setDuration] = useState(10000);
  const [progress, setProgress] = useState(100);
  const [timer, setTimer] = useState(duration / 1000);

  useEffect(() => {
    var x = setInterval(function () {
      setTimer((currTime) => {
        console.log("tick");
        if (isNaN(currTime)) {
          // If the count down is finished, write some text
          clearInterval(x);
          return currTime;
        }
        return (currTime - 0.1).toFixed(1);
      });
    }, 100);
  }, [progress]);

  useEffect(() => {
    if (timer <= 0) {
      setTimer("0");
    }
  }, [timer]);

  return (
    <View style={AppStyle.container}>
      <Text>Song Progress Bar Here</Text>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={progress}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        duration={duration}
      >
        {(fill) => {
          return <Text>{timer}S</Text>;
        }}
      </AnimatedCircularProgress>
      <MediaPlayer songDuration={duration} />
    </View>
  );
};

export default SongProgress;
