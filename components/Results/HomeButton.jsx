import React from "react";
import { Button, View } from "react-native";
import AppStyle from "../../style/App.style";

const HomeButton = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("Homepage")}
        title="Homepage"
      />
    </View>
  );
};

export default HomeButton;
