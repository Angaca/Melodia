import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { createUsers } from "../../src/graphql/mutations";
import { listUsers } from "../../src/graphql/queries";

export default function Leaderboard() {
  Amplify.configure(awsconfig);

  async function createNewUser() {
    const user = {
      id: 1,
      username: "test",
      score: 100,
    };

    return await API.graphql(graphqlOperation(createUsers, { input: user }));
  }

  async function getData() {
    API.graphql(graphqlOperation(listUsers))
      .then((evt) => {
        evt.data.listUsers.items.map((user) => {
          console.log(user);
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <View>
      <Text>Hello</Text>
      <Button onPress={() => createNewUser()} title="add" />
      <Button onPress={() => getData()} title="show" />
    </View>
  );
}
