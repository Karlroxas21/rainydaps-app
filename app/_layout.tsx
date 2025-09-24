import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { ThemeProvider } from "./context/ThemeContext";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
