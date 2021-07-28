import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import AppStyle from "../../style/App.style";
import { useSpotify } from "../../utils/Api";
import { Audio } from "expo-av";

export default function MediaPlayer(props) {
  const { songDuration = 10000, resetTimer, isPlaying, setIsPlaying } = props;
  const [song, setSong] = useState();
  const [sound] = useState(new Audio.Sound())
  const { getTracksByArtist, accessToken } = useSpotify();

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
    await sound.unloadAsync();
  }

  useEffect(() => {
    loadSong();
    if (!isPlaying) {
      unloadSong();
    }
  }, [isPlaying]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTracksByArtist("aries");
      if (response) {
        setSong(response.data.tracks.items[0]);
      }
    }
    if (!song) fetchData();
  }, [accessToken]);

  async function playSong() {
    if (song && song.preview_url) {
      try {
        await loadSong();
        setIsPlaying(true);
        sound.playAsync();
        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        setTimeout(() => {
          sound.unloadAsync();
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
