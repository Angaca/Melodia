import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Button } from "react-native";
import AppStyle from "../../style/App.style";
import { Audio } from "expo-av";

export default function MediaPlayer(props) {
  const { songDuration = 10000, isPlaying, setIsPlaying, song } = props;
  const [sound] = useState(new Audio.Sound());

  async function loadSong() {
    if (!song || sound._loaded) return;
    try {
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

  useEffect(() => {
    if (!isPlaying) {
      unloadSong();
    }
  }, [isPlaying]);

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
      {!isPlaying && (
        <Button
          title="Play Song"
          onPress={playSong}
          accessibilityLabel="Play Song!"
        />
      )}
    </View>
  );
}
