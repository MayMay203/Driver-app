import { StyleSheet, Text, View } from "react-native";

const Income = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Income Screen</Text>
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
export default Income;
