import React from "react";
import { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import { Audio } from "expo-av";
import { heightPercentageToDP } from "react-native-responsive-screen";
import QuestionAnimation from "./QuestionAnimation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PlayBtn from "../Shared/PlayBtn";

export default function MediaPlayer(props) {
  const {
    songDuration = 10000,
    isPlaying,
    setIsPlaying,
    song,
    round,
    clicked,
    setClicked,
    setRound,
  } = props;
  const { countdown, setCountdown } = useContext(ScoreContext);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [sound] = useState(new Audio.Sound());

  useEffect(() => {
    setShowPlayButton(false);
    if (!isPlaying) {
      unloadSong();
    }
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(false);
    setShowPlayButton(false);
    loadSong();
    setCountdown(3);
  }, [round]);

  useEffect(() => {
    if (countdown) setShowPlayButton(false);
    if (countdown < 0) setCountdown(0);
    if (countdown > 0)
      setTimeout(() => {
        setCountdown((curr) => curr - 1);
      }, 1000);
    if (countdown === 0) playSong();
  }, [countdown]);

  async function loadSong() {
    if (!song) return;
    try {
      if (sound._loaded) await sound.unloadAsync();
      await sound.loadAsync({ uri: song.preview_url });
      await sound.setVolumeAsync(0.25);
    } catch (error) {
      // An error occurred!
      console.error(error);
    }
  }

  async function unloadSong() {
    if (sound._loaded) {
      setShowPlayButton(true);
      await sound.unloadAsync();
    }
  }

  function clearAllTimeouts() {
    let id = window.setTimeout(function () {}, 0);

    while (id--) {
      window.clearTimeout(id);
    }
  }

  async function playSong() {
    if (song && song.preview_url) {
      clearAllTimeouts();
      setIsPlaying(true);
      try {
        await loadSong();
        await sound.playAsync();
        // Sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        setTimeout(() => {
          setIsPlaying(false);
        }, songDuration);
      } catch (error) {
        // An error occurred!
        console.error(error);
      }
    }
  }
  if (countdown) return <Text style={style.rankTitle}>{countdown}</Text>;
  return (
    <View style={style.container}>
      {showPlayButton && !clicked && (
        <QuestionAnimation
          style={style.questionSVG}
          onPress={playSong}
          loop={false}
        />
      )}
      {clicked && round !== 10 && (
        <TouchableOpacity
          onPress={() => {
            setRound((currentValue) => {
              if (currentValue >= 10) return currentValue;
              return currentValue + 1;
            });
            setClicked(false);
            setCountdown(3);
            setIsPlaying(false);
          }}
        >
          <PlayBtn />
        </TouchableOpacity>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  rankTitle: {
    fontSize: heightPercentageToDP("20%"),
    color: "#256EFF",
    alignItems: "center",
    fontWeight: "bold",
    marginTop: hp("-1.5%"),
  },
});
