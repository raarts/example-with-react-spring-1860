import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ToastContextProvider } from "./Toaster/ToastContext";
import Main from "./Main";

export default function App() {
  return (
    <View style={styles.container}>
      <ToastContextProvider>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Main />
        <StatusBar style="auto" />
      </ToastContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
