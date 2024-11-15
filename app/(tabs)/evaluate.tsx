import Header from "@/components/ui/Header";
import { StyleSheet, Text, View } from "react-native";

const Evaluate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Evaluate Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Evaluate;
