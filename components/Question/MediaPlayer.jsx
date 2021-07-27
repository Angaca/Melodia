import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import AppStyle from "../../style/App.style";
import { useSpotify } from "../../utils/Api";
import { Audio } from 'expo-av';

export default function MediaPlayer() {
  const [song, setSong] = useState();
  const { getTracksByArtist, getAudioFeaturesById, accessToken } = useSpotify();

  useEffect(() => {
    async function fetchData() {
      const response = await getTracksByArtist("aries");
      if (response) {
        console.log(response.data.tracks);
        setSong(response.data.tracks.items[0]);
      }
    }
    if (!song) fetchData();
  }, [accessToken]);

  async function playSong() {
    if (song && song.preview_url) {
        const sound = new Audio.Sound();
        try {
          await sound.loadAsync(song.preview_url);
          await sound.setVolumeAsync(0.4)
          await sound.playAsync();
          // Your sound is playing!
        
          // Don't forget to unload the sound from memory
          // when you are done using the Sound object
        //   await sound.unloadAsync();
        } catch (error) {
          // An error occurred!
          console.error(error)
        }
      
    }
  }

  return (
    <View style={AppStyle.container}>
      <Text>Hi, Playing song here!</Text>
      <Button
        title="Play Song"
        onPress={playSong}
        accessibilityLabel="Play Song!"
      />
    </View>
  );
}
