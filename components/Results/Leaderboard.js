import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { listUsers } from "../../src/graphql/queries";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FinalScore from "./FinalScore";

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

  function sortByScore(a, b) {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  }

  return (
    <View>
      {!show ? (
        <View>
          <FinalScore />
          <Button
            color="#FFC107"
            onPress={() => getData()}
            title="Leaderboard"
          />
        </View>
      ) : (
        <View style={style.leaderboard}>
          <Text style={style.leadTitle}>Leaderboard</Text>

          {users.sort(sortByScore).map((user, index) => (
            <View style={style.info} key={`${user.username}${index}`}>
              <Text style={{ fontSize: 16, color: "white" }}>
                {user.username}
              </Text>
              <Text style={{ fontSize: 16, color: "white" }}>{user.score}</Text>
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
    width: wp("50%"),
    color: "white",
  },

  leadTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: hp("3%"),
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("50%"),
  },
});
