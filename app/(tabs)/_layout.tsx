import AddNewEntry from "@/components/newentry";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as NavigationBar from "expo-navigation-bar";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar"; // <-- Import StatusBar
import React, { useEffect, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function TabLayout() {
  const [isModalVisible, setModalVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    // Android navigation bar
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync(darkMode ? "#1b263b" : "#f4f6f9");
      NavigationBar.setButtonStyleAsync(darkMode ? "light" : "dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* status bar for iOS & Android */}
      <StatusBar
        style={darkMode ? "light" : "dark"}
        translucent={false}
      />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: darkMode ? "#f4f6f9" : "#1b263b",
          headerStyle: {
            backgroundColor: darkMode ? "#1b263b" : "#f4f6f9",
          },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: darkMode ? "#1b263b" : "#f4f6f9",
          },
          
          headerTitle: () => (
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: darkMode ? "#f4f6f9" : "#1b263b",
                  textAlign: "center",
                }}
              >
                RainyDays
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: darkMode ? "#ddd" : "#555",
                  textAlign: "center",
                }}
              >
                Build your safety net
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Ionicons
                name="add-sharp"
                size={28}
                color={darkMode ? "#f4f6f9" : "#1b263b"}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="group"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "people-sharp" : "people-outline"}
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "bar-chart-sharp" : "bar-chart-outline"}
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person-sharp" : "person-outline"}
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tabs>

      <AddNewEntry
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
