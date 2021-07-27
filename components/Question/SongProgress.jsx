import React from "react";
import { Text, View } from "react-native";
import AppStyle from "../../style/App.style";
import MediaPlayer from "./MediaPlayer"

const SongProgress = () => {
  return (
    <View style={AppStyle.container}>
      <Text>Song Progress Bar Here</Text>
      <MediaPlayer />
    </View>
  );
};

export default SongProgress;
