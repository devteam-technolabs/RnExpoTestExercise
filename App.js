import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { TestExercise } from "./src/screens/TextExercise";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ExpoStatusBar style="auto" />
      <TestExercise />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});
