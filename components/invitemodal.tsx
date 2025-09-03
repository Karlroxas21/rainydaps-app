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
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("Submitted:", { name });
    onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      {/* Overlay */}
      <Pressable style={styles.overlay} onPress={onClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Modal content */}
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Invite a member</Text>
              </View>

              <View style={styles.body}>
                <Text style={{ fontWeight: "400", fontSize: 14 }}>
                  Enter username or email
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter username or email"
                  placeholderTextColor="#aaa"
                  value={name}
                  onChangeText={setName}
                  autoFocus
                />
              </View>

              <View style={styles.actions}>
                <Pressable style={styles.submitBtn} onPress={handleSubmit}>
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
    padding: 10, // keeps spacing consistent on small screens
  },
  modalContent: {
    width: screenWidth * 0.9, // responsive width (90%)
    maxWidth: 500, // keep nice size on tablets
    maxHeight: screenHeight * 0.8, // prevent overflow
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 15,
    gap: 12,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#333",
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
    backgroundColor: "#1B263B",
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});
