import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

type Goal = {
  id: string;
  text: string;
};
export default function HomeScreen() {
  const [list, setList] = useState<Goal[]>([]);
  const [isModalVisible, setIsModalVisisble] = useState(false);
  function startAddGoalModalhandler() {
    setIsModalVisisble(true);
  }
  function endAddGoalModalhandler() {
    setIsModalVisisble(false);
  }
  return (
    <>
      <View style={styles.container}>
        <Button
          title={"Add new goal"}
          color="#5e0acc"
          onPress={startAddGoalModalhandler}
        />
        <GoalInput
          setList={setList}
          visible={isModalVisible}
          endAddGoalModalhandler={endAddGoalModalhandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList<Goal>
            data={list}
            alwaysBounceVertical
            renderItem={({ item }) => {
              console.log(item);
              return <GoalItem item={item} setList={setList} list={list} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",

    paddingTop: 50,
    padding: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
