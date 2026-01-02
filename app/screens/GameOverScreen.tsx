import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import Title from "../components/Title";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 500) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <View style={styles.container}>
      <Title title={"Game Over!"}></Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.text}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.text}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame} label={"Start New Game"} />
    </View>
  );
}
export default GameOverScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ddb52f",
    fontSize: 24,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "#ddb52f",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    color: "white",
    paddingHorizontal: 20,
  },
});
