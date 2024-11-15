import { Colors } from "@/constants/Colors";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

type ButtonProps = {
  title: string;
  type: string;
  onPress: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: string;
};

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  onPress,
  iconLeft,
  iconRight,
  size
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "primary" ? styles.primary : styles.outline,
        size === "small"?styles.smallSize:{}
      ]}
      onPress={onPress}
    >
      {iconLeft && <View className="mr-[4px]">iconLeft</View>}
      <Text
        style={type === "primary" ? styles.textPrimary : styles.textOutline}
      >
        {title}
      </Text>
      {iconRight && <View className="ml-[4px]">iconRight</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    height: 36,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  smallSize: {
    height: 28,
    minWidth: 80,
  },
  primary: {
    backgroundColor: Colors.primaryColor,
    color: "#fff",
  },
  outline: {
    color: Colors.primaryColor,
    backgroundColor: "#fff",
    borderColor: Colors.primaryColor,
    borderWidth: 1,
  },
  textPrimary: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },
  textOutline: {
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
});

export default Button;
