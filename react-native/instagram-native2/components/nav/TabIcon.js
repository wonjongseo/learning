import React from "react";
import { Ionicons } from "@expo/vector-icons";
export default function TabIcon({ iconName, color, focused }) {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={focused ? 24 : 20}
    />
  );
}
