import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { useTheme } from "../context/ThemeContext"; // ✅ theme hook

export default function Dashboard() {
  const { darkMode } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: darkMode ? "#0D1B2A" : "#e4e7ebff" }, // ✅ page bg
      ]}
    >
      {/* Balance summary */}
      <View style={styles.shadowWrapper}>
        <LinearGradient
          colors={["#1B263B", "#396FDC"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.summaryContainer}
        >
          <Text style={[styles.title, { color: "#fff" }]}>
            Your Emergency Fund
          </Text>
          <Text style={[styles.subtitle, { color: "#fff" }]}>
            Current Balance
          </Text>

          <Progress.Bar
            progress={0.6}
            width={null}
            style={styles.progressBar}
            color="#fff"
            borderRadius={5}
          />

          <Text style={[styles.goalText, { color: "#fff" }]}>
            Goal: P100,000.00
          </Text>
        </LinearGradient>
      </View>

      {/* Stats row */}
      <View style={styles.statsContainer}>
        <View style={styles.statsRowContainer}>
          <View
            style={[
              styles.statCard,
              { backgroundColor: darkMode ? "#1B263B" : "#f4f6f9" },
            ]}
          >
            <Ionicons
              name="add-sharp"
              size={30}
              color={darkMode ? "#fff" : "#000"}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ fontSize: 15, color: darkMode ? "#ddd" : "#000" }}
              >
                This Month
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: darkMode ? "#fff" : "#000",
                }}
              >
                + P5000.00
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.statCard,
              { backgroundColor: darkMode ? "#1B263B" : "#f4f6f9" },
            ]}
          >
            <Ionicons
              name="calendar-outline"
              size={30}
              color={darkMode ? "#fff" : "#000"}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ fontSize: 15, color: darkMode ? "#ddd" : "#000" }}
              >
                Months Active
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: darkMode ? "#fff" : "#000",
                }}
              >
                3 / 12
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent transactions */}
      <View
        style={[
          styles.entriesContainer,
          { backgroundColor: darkMode ? "#1B263B" : "#f4f6f9" },
        ]}
      >
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text
            style={{
              fontWeight: "bold",
              padding: 10,
              fontSize: 15,
              color: darkMode ? "#fff" : "#000",
            }}
          >
            Recent Entries
          </Text>
          <Link
            style={{
              fontSize: 13,
              color: darkMode ? "#4DA3FF" : "#3498db",
              padding: 10,
            }}
            href="/"
          >
            View All
          </Link>
        </View>

        <View style={styles.entries}>
          {[1, 2, 3, 4].map((i) => (
            <View
              key={i}
              style={[
                styles.entriesCard,
                { backgroundColor: darkMode ? "#0D1B2A" : "#f8f9fa" },
              ]}
            >
              <Ionicons
                name="wallet-outline"
                size={30}
                color={darkMode ? "#fff" : "#000"}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#01BD81",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  + P5000.00
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: darkMode ? "#ccc" : "#7f8c8d",
                  }}
                >
                  Bonus from Work
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  shadowWrapper: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
    width: "100%",
    minHeight: 160,
  },
  summaryContainer: {
    borderRadius: 12,
    padding: 20,
    width: "100%",
    maxHeight: 160,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 5,
  },
  progressBar: {
    alignSelf: "stretch",
    marginVertical: 5,
  },
  goalText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "right",
  },
  statsContainer: {
    width: "100%",
    marginTop: 5,
  },
  statsRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  entriesContainer: {
    marginTop: 15,
    width: "100%",
    borderRadius: 10,
  },
  entries: {
    flex: 1,
    margin: 10,
  },
  entriesCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
});
