import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Answers from "./Answers";
import NextButton from "./NextButton";
import RoundProgress from "./RoundProgress";
import SongProgress from "./SongProgress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSpotify } from "../../utils/Api";
import { useEffect } from "react";


const Question = ({ navigation }) => {
  const { getTracksByArtist, accessToken } = useSpotify();
  const [songs, setSongs] = useState([]);
  const [round, setRound] = useState(1);

  useEffect(() => {
    let isMounted = true;
    getTracksByArtist("lofi").then((response) => {
      if (isMounted && response) {
        setSongs(response.data.tracks.items);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [accessToken]);

  return (
    <View style={style.container}>
      <Text>Melodia</Text>
      <RoundProgress round={round} />
      <Answers style={style.answers} />
      <SongProgress round={round} songs={songs} />
      {round < 10 ? <NextButton setRound={setRound} /> : null}
      {round === 10 ? (
        <Button
          onPress={() => {
            navigation.navigate("Results");
            setRound(0);
          }}
          title="Results"
        />
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  answers: {},
});

export default Question;
