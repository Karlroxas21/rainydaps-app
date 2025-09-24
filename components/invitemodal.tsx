import { useTheme } from "@/app/context/ThemeContext";
import { PropsWithChildren, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function InviteModal({ isVisible, onClose }: Props) {
  const { darkMode } = useTheme();
  const [name, setName] = useState("");

  const colors = {
    background: darkMode ? "#1c1c1c" : "#fff",
    text: darkMode ? "#fff" : "#000",
    placeholder: darkMode ? "#aaa" : "#aaa",
    border: darkMode ? "#555" : "#333",
    button: darkMode ? "#396FDC" : "#1B263B",
  };

  const handleSubmit = () => {
    console.log("Submitted:", { name });
    onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Pressable style={[styles.modalContent, { backgroundColor: colors.background }]} onPress={() => {}}>
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.titleContainer}>
                <Text style={[styles.title, { color: colors.text }]}>Invite a member</Text>
              </View>

              <View style={styles.body}>
                <Text style={{ fontWeight: "400", fontSize: 14, color: colors.text }}>
                  Enter username or email
                </Text>
                <TextInput
                  style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
                  placeholder="Enter username or email"
                  placeholderTextColor={colors.placeholder}
                  value={name}
                  onChangeText={setName}
                  autoFocus
                />
              </View>

              <View style={styles.actions}>
                <Pressable style={[styles.submitBtn, { backgroundColor: colors.button }]} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Submit</Text>
                </Pressable>
              </View>
            </ScrollView>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  modalContent: {
    width: screenWidth * 0.9,
    maxWidth: 500,
    maxHeight: screenHeight * 0.8,
    borderRadius: 12,
    overflow: "hidden",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 15,
    gap: 12,
  },
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 15,
    gap: 10,
  },
  submitBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});
