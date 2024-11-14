import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

// Định nghĩa các tên icon trong một kiểu cụ thể hơn.
const MAPPING = {
  "house.fill": "home",
  "star.fill": "star",
  "history.fill": "add-alarm",
  "account.fill": "account-circle",
  "income.fill": "attach-money",
  "bill.fill": "pageview",
} as const;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      // style={style}
    />
  );
}
