import { StyleSheet, Text } from "react-native";
function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb528",
    textAlign: "center",
    borderWidth: 2,
    padding: 8,
    borderColor: "#ddb528",
  },
});
export default Title;
