import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 300,
          height: 300,
        }}
        source={require("./animations/loading.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
