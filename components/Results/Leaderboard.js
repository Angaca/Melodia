import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { listUsers } from "../../src/graphql/queries";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
/* 
const users = [
  { username: "username", score: 100 },
  { username: "username", score: 100 },
  { username: "username", score: 100 },
  { username: "username", score: 100 },
  { username: "username", score: 100 },
]; */

export default function Leaderboard() {
  Amplify.configure(awsconfig);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  /* function getData() {
    setShow(true);
  }
 */
  async function getData() {
    API.graphql(graphqlOperation(listUsers)).then((evt) => {
      const results = evt.data.listUsers.items;
      setUsers(results);
      setShow(true);
      console.log(users);
    });
  }

  function sortByScore(a, b) {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  }

  return (
    <View>
      {!show ? (
        <Button onPress={() => getData()} title="See Leaderboard" />
      ) : (
        <View style={style.leaderboard}>
          <Text style={style.leadTitle}>Leaderboard</Text>
          {users.sort(sortByScore).map((user, index) => (
            <View key={`${user.username}${index}`}>
              <View style={style.info}>
                <Text style={{ fontSize: 16 }}>{user.username}</Text>
                <Text style={{ fontSize: 16 }}>{user.score}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  leaderboard: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },

  leadTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: hp("3%"),
  },
  info: {
    flexDirection: "row",

    justifyContent: "space-evenly",
    alignItems: "center",
    width: wp("90%"),
  },
});
