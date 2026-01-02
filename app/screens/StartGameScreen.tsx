import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import Title from "../components/Title";
function StartGameScreen({ onPickNumber }) {
  const { width, height } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number must be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };
  const marginTopDistance = height < 600 ? 20 : 100;
  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View>
          <View style={{ paddingHorizontal: 20 }}>
            <Title title="Guess My Number" />
          </View>
          <View style={[styles.container, { marginTop: marginTopDistance }]}>
            <Text style={styles.instructionText}>Enter a Number</Text>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyles}>
                <PrimaryButton label="Reset" onPress={resetInputHandler} />
              </View>
              <View style={styles.buttonStyles}>
                <PrimaryButton label="Confirm" onPress={confirmInputHandler} />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
  },
  container: {
    backgroundColor: "#33011aff",

    gap: 4,

    alignItems: "center",
    margin: 16,
    borderRadius: 20,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "800",
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: 4,
    display: "flex",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  buttonStyles: {
    flex: 1,
  },
  instructionText: {
    color: "#ddb52f",
    fontSize: 24,
    paddingTop: 16,
  },
});
