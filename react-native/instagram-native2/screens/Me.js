export const ME_PATH = "Me";
export const TAB_ME_PATH = "TabMe";
import React from "react";
import { Text, View } from "react-native";

export default function Me() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Me</Text>
    </View>
  );
}
