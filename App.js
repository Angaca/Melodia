import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScoreContext } from "./context/ScoreContext";
import Homepage from "./components/Homepage/Homepage";
import Question from "./components/Question/Question";
import Results from "./components/Results/Results";

const Stack = createStackNavigator();

export default function App() {
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [username, setUsername] = useState();

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
        countdown,
        setCountdown,
        username,
        setUsername,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            style={{ backgroundColor: "transparent" }}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Question"
            component={Question}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Results"
            component={Results}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScoreContext.Provider>
  );
}
