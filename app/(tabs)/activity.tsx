import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useTheme } from '../context/ThemeContext';

const { width } = Dimensions.get("window");

export default function Index() {
  const { darkMode } = useTheme(); // 👈 use darkMode state

  // Dynamic colors depending on dark mode
  const colors = {
    background: darkMode ? "#0D1B2A" : "#e4e7ebff",
    card: darkMode ? "#2c3e50" : "#fff",
    text: darkMode ? "#fff" : "#000",
    subtext: darkMode ? "#bdc3c7" : "#7f8c8d",
    progressBg: darkMode ? "#fff" : "#1B263B",
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Monthly Activity */}
      <View style={[styles.activityContainer, { backgroundColor: colors.card }]}>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 15, color: colors.text }}>Monthly Activity</Text>
          <Text style={{ color: colors.subtext, fontSize: 10 }}>
            Your savings pattern this month
          </Text>
        </View>

        {[
          { day: "Mon", progress: 0.3, entries: "1 entry" },
          { day: "Tue", progress: 0.5, entries: "2 entries" },
          { day: "Wed", progress: 0.3, entries: "1 entry" },
          { day: "Thurs", progress: 0.0, entries: "" },
          { day: "Fri", progress: 0.0, entries: "" },
        ].map((item, index) => (
          <View style={styles.activity} key={index}>
            <Text style={[styles.dayText, { color: colors.text }]}>{item.day}</Text>
            <View>
              <Progress.Bar
                progress={item.progress}
                borderRadius={5}
                color="#1B263B"
                style={[styles.progressBar, { backgroundColor: colors.progressBg, borderColor: colors.progressBg }]}
                width={width * 0.45}
              />
              <Text style={[styles.progresstext, { color: colors.subtext }]}>P120</Text>
            </View>
            <Text style={[styles.entryText, { color: colors.subtext }]}>{item.entries}</Text>
          </View>
        ))}
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={[styles.stats, { backgroundColor: colors.card }]}>
          <Ionicons name="trophy-outline" size={20} color={colors.text} />
          <Text style={{ color: colors.subtext }}>Most Active</Text>
          <Text style={{ fontWeight: "bold", color: colors.text }}>Tuesday</Text>
        </View>
        <View style={[styles.stats, { backgroundColor: colors.card }]}>
          <Ionicons name="cash-outline" size={20} color={colors.text} />
          <Text style={{ color: colors.subtext }}>Avg. Daily</Text>
          <Text style={{ fontWeight: "bold", color: colors.text }}>₱120</Text>
        </View>
      </View>

      {/* Streak */}
      <LinearGradient
        colors={["#1B263B", "#396FDC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.streakContainer}
      >
        <Ionicons name="flash-outline" size={40} color={"#fff"} />
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "#fff", textAlign: "center" }}>
          2 Months Streak!
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  activityContainer: {
    borderRadius: 10,
    width: "95%",
    marginVertical: 20,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 10,
  },
  dayText: {
    width: 40,
    fontSize: 12,
  },
  progressBar: {
    marginHorizontal: 10,
  },
  progresstext: {
    marginHorizontal: 10,
    fontSize: 10,
    margin: 2,
  },
  entryText: {
    fontSize: 10,
    width: 50,
    textAlign: "right",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    marginBottom: 10,
  },
  stats: {
    flex: 1,
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 5,
    alignItems: "center",
  },
  streakContainer: {
    borderRadius: 12,
    width: "95%",
    minHeight: 100,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
