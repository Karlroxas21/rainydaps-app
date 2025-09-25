import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { LogBox, Platform } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { ThemeProvider } from "./context/ThemeContext";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      changeNavigationBarColor("#ffffff", true, false);
    }
  }, []);

  return (
    <ThemeProvider>
      <StatusBar style="auto" translucent={false} />

      <Stack screenOptions={{ headerBackTitle: '' }}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="profile-details"
          options={{
            title: "Profile Details",
            headerBackTitle: 'Account',
          }}
        />
        <Stack.Screen
          name="groups"
          options={{
            title: "Groups",
            headerBackTitle: 'Account',
          }}
        />
        <Stack.Screen
          name="history"
          options={{
            title: "History",
            headerBackTitle: 'Account',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
