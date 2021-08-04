import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { createUsers, deleteUsers } from "../../src/graphql/mutations";
import { listUsers } from "../../src/graphql/queries";

export default function Leaderboard() {
  Amplify.configure(awsconfig);

  async function createNewUser() {
    const user = {
      username: "test",
      score: 0,
    };
    return await API.graphql(graphqlOperation(createUsers, { input: user }));
  }

  async function getData() {
    API.graphql(graphqlOperation(listUsers)).then((evt) => {
      evt.data.listUsers.items.map((user) => {
        console.log(user);
      });
    });
  }

  return (
    <View>
      <Text>Hello</Text>
      <Button onPress={() => getData()} title="show" />
    </View>
  );
}
