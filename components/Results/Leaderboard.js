import React from "react";
import { View, Text } from "react-native";
import { Auth } from "aws-amplify";

export default function Leaderboard() {

  const user = Auth.currentUserInfo().then(res=>{
      console.log(res.username)
  });

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
