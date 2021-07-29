import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import AppStyle from "../../style/App.style";
import { Audio } from "expo-av";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function MediaPlayer(props) {
  const { songDuration = 10000, isPlaying, setIsPlaying, song, round } = props;
  const [countdown, setCountdown] = useState(3);
  const [sound] = useState(new Audio.Sound());

  useEffect(() => {
    if (!isPlaying) {
      unloadSong();
    }
  }, [isPlaying]);

  useEffect(() => {
    loadSong();
    setCountdown(3);
    setTimeout(() => {
      playSong();
    }, 3000);
  }, [round]);

  useEffect(() => {
    if(countdown < 0) setCountdown(0)
    if (countdown > 0)
      setTimeout(() => {
        setCountdown((curr) => curr - 1);
      }, 1000);
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
      await sound.unloadAsync();
    }
  }

  async function playSong() {
    if (song && song.preview_url) {
      setIsPlaying(true);
      try {
        await loadSong();
        await sound.playAsync();
        // Your sound is playing!

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

  return (
    <View style={AppStyle.container}>
      {countdown !== 0 && <Text style={style.rankTitle}>{countdown}</Text>}
      {!isPlaying && !countdown && (
        <Button
          title="Play Song"
          onPress={playSong}
          accessibilityLabel="Play Song!"
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  rankTitle: {
    fontSize: heightPercentageToDP("6%"),
    color: "#E0B318",
    fontWeight: 800,
  }
})