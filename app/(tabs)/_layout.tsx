import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1b263b',
        headerStyle: {
          backgroundColor: '#f4f6f9',
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: '#f4f6f9',
        },
        headerTitle: () => (
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1b263b' }}>
              Emergency Fund
            </Text>
            <Text style={{ fontSize: 13, color: '#555' }}>
              Build your safety net
            </Text>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons
              name="add-sharp"
              size={28}
              color="#1b263b"
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
              name={focused ? 'home-sharp' : 'home-outline'}
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
              name={focused ? 'people-sharp' : 'people-outline'}
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
              name={focused ? 'bar-chart-sharp' : 'bar-chart-outline'}
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
              name={focused ? 'person-sharp' : 'person-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs>
    
  );
}
