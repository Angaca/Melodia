import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { listUsers } from "../../src/graphql/queries";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FinalScore from "./FinalScore";
import { ScoreContext } from "../../context/ScoreContext";

export default function Leaderboard() {
  const { username, score } = useContext(ScoreContext);
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
          <TouchableOpacity style={style.button} onPress={() => getData()}>
            <Text style={style.leadBtnTitle}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={style.leaderboard}>
          <Text style={style.leadTitle}>Leaderboard</Text>

          {users.sort(sortByScore).map((user, index) => {
            const localScore =
              user.username === username ? score + user.score : user.score;

            return (
              <View style={style.info} key={`${user.username}${index}`}>
                <Text style={{ fontSize: 16, color: "white" }}>
                  {user.username}
                </Text>
                <Text style={{ fontSize: 16, color: "white" }}>
                  {localScore}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  leaderboard: {
    flexDirection: "column",
    color: "white",
    paddingBottom: hp("1.5%"),
    paddingTop: hp("1.5%"),
  },

  leadTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: hp("1.5%"),
  },

  leadBtnTitle: {
    fontWeight: "700",
    color: "white",
    fontSize: 16,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("70%"),
  },

  button: {
    alignItems: "center",
    padding: 12,
    color: "white",
    backgroundColor: "#FFC107",
    borderRadius: 10,
    elevation: 3,
  },
});
