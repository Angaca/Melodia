import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import MediaPlayer from "./MediaPlayer";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useState } from "react";

const SongProgress = (props) => {
  const { round, songs, clicked, setClicked, setRound } = props;
  const [duration] = useState(5000);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={AppStyle.container}>
      {isPlaying && (
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={100}
          tintColor="#256EFF"
          backgroundColor="#3d5875"
          duration={duration}
        >
          {(fill) => {
            return (
              <Text>{((duration / 1000) * (fill / 100)).toFixed(1)}s</Text>
            );
          }}
        </AnimatedCircularProgress>
      )}
      <MediaPlayer
        round={round}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        songDuration={duration}
        song={songs[round - 1]}
        clicked={clicked}
        setRound={setRound}
        setClicked={setClicked}
      />
    </View>
  );
};

export default SongProgress;
