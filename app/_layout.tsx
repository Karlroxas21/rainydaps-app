import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { LogBox, Platform } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; // ✅ hook into theme

LogBox.ignoreAllLogs(true);

function LayoutWithTheme() {
  const { darkMode } = useTheme(); // ✅ get dark mode state

  useEffect(() => {
    if (Platform.OS === "android") {
      changeNavigationBarColor(
        darkMode ? "#1b263b" : "#ffffff", // nav background
        !darkMode,                        // icons color (light/dark)
        false
      );
    }
  }, [darkMode]);

  return (
    <>
      <StatusBar
        style={darkMode ? "light" : "dark"}
        backgroundColor={darkMode ? "#1b263b" : "#ffffff"}
        translucent={false}
      />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: darkMode ? "#1b263b" : "#ffffff",
          },
          headerTintColor: darkMode ? "#ffffff" : "#000000",
          headerBackTitle: "Account",
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="profile-details" options={{ title: "Profile Details" }} />
        <Stack.Screen name="groups" options={{ title: "Groups" }} />
        <Stack.Screen name="history" options={{ title: "History" }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutWithTheme />
    </ThemeProvider>
  );
}
