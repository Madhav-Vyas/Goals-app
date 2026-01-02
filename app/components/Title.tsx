import { Platform, StyleSheet, Text } from "react-native";
function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb528",
    textAlign: "center",
    borderWidth: Platform.OS === "ios" ? 2 : 0,
    padding: 8,
    borderColor: "#ddb528",
  },
});
export default Title;
