import { useTheme } from "@/app/context/ThemeContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import {
    Dimensions,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const { height } = Dimensions.get("window");

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function GroupActivity({ isVisible, onClose }: Props) {
  const { darkMode } = useTheme();

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View
        style={[
          styles.modalContent,
          { backgroundColor: darkMode ? "#1c1c1c" : "#fff" },
        ]}
      >
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            Group Activity
          </Text>
          <Pressable onPress={onClose}>
            <MaterialIcons
              name="close"
              color={darkMode ? "#fff" : "#000"}
              size={22}
            />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          <LinearGradient
            colors={["#1B263B", "#396FDC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.firstContainer}
          >
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Group Total This Month</Text>
              <Text style={styles.statValue}>P 25,000</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Most Active Member</Text>
              <Text style={styles.statValue}>Karl</Text>
            </View>
          </LinearGradient>

          <Text
            style={[
              styles.sectionTitle,
              { color: darkMode ? "#fff" : "#000" },
            ]}
          >
            Recent Activity
          </Text>

          <View
            style={[
              styles.activity,
              {
                borderColor: darkMode ? "#555" : "#ccc",
                backgroundColor: darkMode ? "#2a2a2a" : "#fff",
              },
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: darkMode ? "#555" : "#ccc" },
                ]}
              />
              <View style={{ flex: 1 }}>
                <View style={styles.rowBetween}>
                  <View style={styles.rowCenter}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: darkMode ? "#fff" : "#000",
                      }}
                    >
                      You
                    </Text>
                    <View style={styles.depositBadge}>
                      <Text style={styles.depositText}>Deposit</Text>
                    </View>
                  </View>
                  <Text style={styles.amount}>+ P5,000.00</Text>
                </View>
                <Text
                  style={[
                    styles.activityNote,
                    { color: darkMode ? "#aaa" : "#647282" },
                  ]}
                >
                  Bonus from Work
                </Text>
                <Text
                  style={[
                    styles.activityDate,
                    { color: darkMode ? "#aaa" : "#647282" },
                  ]}
                >
                  June 13, 2025
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: height * 0.8,
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 16,
  },
  firstContainer: {
    borderRadius: 12,
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statBox: {
    flex: 1,
    marginHorizontal: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  statValue: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  activity: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  depositBadge: {
    backgroundColor: "#01BD81",
    borderRadius: 10,
    marginLeft: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  depositText: {
    color: "#fff",
    fontSize: 10,
  },
  amount: {
    color: "#01BD81",
    fontWeight: "bold",
  },
  activityNote: {
    fontSize: 10,
    marginTop: 2,
  },
  activityDate: {
    fontSize: 10,
  },
});
