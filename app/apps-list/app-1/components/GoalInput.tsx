import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Goal = {
  id: string;
  text: string;
};

type GoalInputProps = {
  setList: React.Dispatch<React.SetStateAction<Goal[]>>;
  visible: boolean;
  endAddGoalModalhandler: any;
};

export default function GoalInput({
  setList,
  visible,
  endAddGoalModalhandler,
}: GoalInputProps) {
  const [goal, setGoal] = useState<string>("");

  const goalInputHandler = (goalText: string) => {
    setGoal(goalText);
  };

  const addGoalHandler = () => {
    setList((prev) => [...prev, { text: goal, id: Math.random().toString() }]);
    setGoal("");
    endAddGoalModalhandler();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={endAddGoalModalhandler}
    >
      <View style={styles.inputContainer}>
        <Image source={require("../../../../assets/images/react-logo.png")} />
        <Text style={styles.heading}>Add your Goal</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your cross goal"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#a56df0ff"
            />
          </View>
          <View>
            <Button
              title="close"
              onPress={endAddGoalModalhandler}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#311b6b",
    flexDirection: "column",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderBlockColor: "#cccccc",
    width: "90%",
    borderTopColor: "#e4d0ff",
    color: "#4c5c68",
    backgroundColor: "#e4d0ff",
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    gap: 8,
  },
  heading: {
    fontWeight: "800",
    fontSize: 20,
    color: "#ffffff",
  },
});
