import { Pressable, StyleSheet, Text, View } from "react-native";

type Goal = {
  id: string;
  text: string;
};
type GoalItemProps = {
  item: Goal;
  list: Goal[];
  setList: React.Dispatch<React.SetStateAction<Goal[]>>;
};
const GoalItem = ({ item, setList, list }: GoalItemProps) => {
  const removeItem = (id: any) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };
  return (
    <View style={styles.listItems}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => removeItem(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{item.text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;
const styles = StyleSheet.create({
  listItems: {
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
    margin: 8,
    borderRadius: 6,
    overflow: "hidden",
  },
  text: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
