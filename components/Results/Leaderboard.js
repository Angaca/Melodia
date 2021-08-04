import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { listUsers } from "../../src/graphql/queries";

export default function Leaderboard() {
  Amplify.configure(awsconfig);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  async function getData() {
    API.graphql(graphqlOperation(listUsers)).then((evt) => {
      const results = evt.data.listUsers.items;
      setUsers(results);
      setShow(true);
      console.log(users);
    });
  }

  return (
    <View>
      {!show ? (
        <Button onPress={() => getData()} title="See Leaderboard" />
      ) : (
        <View>
          {users.map((user) => (
            <View key={user.username}>
              <Text>{user.username}</Text>
              <Text>{user.score}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
