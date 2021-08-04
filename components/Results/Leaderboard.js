import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
// import Amplify, { API, graphqlOperation } from "aws-amplify";
// import awsconfig from "../../src/aws-exports";
// import { listUsers } from "../../src/graphql/queries";

const users = [
  { username: "username", score: 100 },
  { username: "username", score: 100 },
  { username: "username", score: 100 },
  { username: "username", score: 100 },
  { username: "username", score: 100 },
];

export default function Leaderboard() {
  // Amplify.configure(awsconfig);
  // const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  function getData() {
    setShow(true);
  }

  // async function getData() {
  //   API.graphql(graphqlOperation(listUsers)).then((evt) => {
  //     const results = evt.data.listUsers.items;
  //     setUsers(results);
  //     setShow(true);
  //     console.log(users);
  //   });
  // }

  return (
    <View>
      {!show ? (
        <Button onPress={() => getData()} title="See Leaderboard" />
      ) : (
        <View>
          {users.map((user,index) => (
            <View key={`${user.username}${index}`}>
              <Text>{user.username}</Text>
              <Text>{user.score}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
