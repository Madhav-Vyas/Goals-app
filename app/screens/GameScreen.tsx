import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import Title from "../components/Title";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, gameoverHandler, setRoundsNumber }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      gameoverHandler();
    }
  }, [currentGuess, userNumber, gameoverHandler]);
  function nextGuessHandler(direction) {
    setRoundsNumber((prevRounds) => prevRounds + 1);
    let minBoundary = 1;
    let maxBoundary = 100;
    if (currentGuess === userNumber) {
      Alert.alert("Game Over!", "The opponent guessed your number!", [
        {
          text: "Okay",
          style: "cancel",
          onPress: () => {},
        },
      ]);
      return;
    }
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
          onPress: () => {},
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  return (
    <View style={styles.screen}>
      <Title title={"Opponent's Guess"} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.container}>
        <Text style={styles.instructionText}>Higher or lower</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 16,
            paddingVertical: 16,
            gap: 16,
          }}
        >
          <PrimaryButton
            label={"+"}
            onPress={() => nextGuessHandler("greater")}
          ></PrimaryButton>
          <PrimaryButton
            label={"-"}
            onPress={() => nextGuessHandler("lower")}
          ></PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb528",
    textAlign: "center",
    borderWidth: 2,
    padding: 8,
    borderColor: "#ddb528",
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
  instructionText: {
    color: "#ddb52f",
    fontSize: 24,
    paddingTop: 16,
  },
});
