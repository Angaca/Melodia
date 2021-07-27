import React, { useEffect } from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import MediaPlayer from "./MediaPlayer";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useState } from "react";

const SongProgress = () => {
  const [duration, setDuration] = useState(5000);
  const [progress, setProgress] = useState(100);
  const [timer, setTimer] = useState(duration / 1000);

  useEffect(() => {
    if (timer && timer > 0) {
      setTimeout(() => {
        setTimer((currTimer) => {
          return (currTimer - 0.1).toFixed(1);
        });
      }, 100);
    }
  }, [timer]);

  useEffect(() => {
    if (timer <= 0) {
      setTimer("0");
    }
  }, [timer]);

  return (
    <View style={AppStyle.container}>
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
