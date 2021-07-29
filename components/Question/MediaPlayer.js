import React from "react";
import { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function MediaPlayer(props) {
  const { songDuration = 10000, isPlaying, setIsPlaying, song, round } = props;
  const [countdown, setCountdown] = useState(3);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [sound] = useState(new Audio.Sound());

  useEffect(() => {
    if (!isPlaying) {
      unloadSong();
      setShowPlayButton(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(false);
    loadSong();
    setCountdown(3);
  }, [round]);

  useEffect(() => {
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
  if (countdown) return <Text style={style.rankTitle}>{countdown}</Text>;
  return (
    <View style={style.container}>
      {!showPlayButton && (
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
  container: {
    flex: 1,
    alignItems: "center",
  },
  rankTitle: {
    fontSize: heightPercentageToDP("6%"),
    color: "#E0B318",
    fontWeight: "800",
  },
});
