import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // ✅ import context

export default function Index() {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useTheme(); // ✅ use context

  // states for toggles
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const profileDetails = () => {
    router.push("/profile-details");
  }

  const history = () => {
    router.push("/history");
  }

  const groups = () => {
    router.push("/groups")
  }

  const login = () => {
    router.replace("/login");
  }

  // Dynamic theme based on dark mode from context
  const themeStyles = {
    background: darkMode ? "#0D1B2A" : "#e4e7ebff",
    card: darkMode ? "#2e3a59" : "#fff",
    text: darkMode ? "#fff" : "#000"
  };

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.background }]}>
      {/* User Info */}
      <View style={[styles.userContainer, { backgroundColor: themeStyles.card }]}>
        <View style={{ flexDirection: 'row' }}>
           <View style={{ borderRadius: 40}}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png" }}
                style={{ width: 80, height: 80 }}
              />
           </View>
           <View style={{ alignContent: 'center', justifyContent: 'center', marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: themeStyles.text }}>John Doe</Text>
            <Text style={{ fontSize: 15, color: themeStyles.text }}>username</Text>
           </View>
        </View>
      </View>

      {/* First Settings Group */}
      <View style={[styles.userSettings, { backgroundColor: themeStyles.card }]}>
          <View style={styles.settings}>
            <Text style={[styles.settingsText, { color: themeStyles.text }]}>Profile Details</Text>
            <TouchableOpacity onPress={profileDetails}><Ionicons name="chevron-forward" size={18} color={themeStyles.text}/></TouchableOpacity>
          </View>
          <View style={styles.divider}/>
          <View style={styles.settings}>
            <Text style={[styles.settingsText, { color: themeStyles.text }]}>History</Text>
            <TouchableOpacity onPress={history}><Ionicons name="chevron-forward" size={18} color={themeStyles.text}/></TouchableOpacity>
          </View>
          <View style={styles.divider}/>
          <View style={styles.settings}>
            <Text style={[styles.settingsText, { color: themeStyles.text }]}>Groups</Text>
            <TouchableOpacity onPress={groups}><Ionicons name="chevron-forward" size={18} color={themeStyles.text}/></TouchableOpacity>
          </View>
      </View>

      {/* Second Settings Group */}
      <View style={[styles.userSettings, { backgroundColor: themeStyles.card }]}>
          <View style={styles.settings}>
            <Text style={[styles.settingsText, { color: themeStyles.text }]}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#ccc", true: "#1b263b" }}
              thumbColor={notificationsEnabled ? "#fff" : "#1b263b"}
              style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
            />
          </View>
          <View style={styles.divider}/>
          <View style={styles.settings}>
            <Text style={[styles.settingsText, { color: themeStyles.text }]}>Dark Mode</Text>
            <Switch
              value={darkMode}                 
              onValueChange={toggleDarkMode}   
              trackColor={{ false: "#ccc", true: "#1b263b" }}
              thumbColor={darkMode ? "#fff" : "#1b263b"}
              style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }]}}
            />
          </View>
          <View style={styles.divider}/>
          <View style={styles.settings}>
            <Text style={{ fontSize: 15, color: "#EF4444" }}>Log Out</Text>
            <TouchableOpacity onPress={login}><Ionicons name="exit-outline" size={18} color={"#EF4444"}/></TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10
  },
  userContainer: {
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    padding: 15
  },
  userSettings: {
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    width: "90%"
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingVertical: 15,  
    paddingHorizontal: 20,
  },
  settingsText: {
    fontSize: 15
  },
  divider: {
    height: 1, 
    backgroundColor: "#ccc",
    marginHorizontal: 15
  }
});
