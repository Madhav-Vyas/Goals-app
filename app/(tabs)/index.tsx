import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import GameOverScreen from "../screens/GameOverScreen";
import GameScreen from "../screens/GameScreen";
import StartGameScreen from "../screens/StartGameScreen";
export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [rounds, setRounds] = useState([]);
  const [fontsLoaded] = useFonts({
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  const gameoverhandler = () => {
    setGameIsOver(true);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setRoundsNumber(0);
    setRounds([]);
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber && !gameIsOver) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameoverHandler={gameoverhandler}
        setRoundsNumber={setRoundsNumber}
        setRounds={setRounds}
        rounds={rounds}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient style={styles.container} colors={["#3b021f", "#ddb52f"]}>
        <ImageBackground
          source={require("../../assets/images/dicesimage.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
