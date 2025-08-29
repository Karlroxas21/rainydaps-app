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
    View
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

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
        {/* Keyboard-aware wrapper */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Modal content */}
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 20 }}
              keyboardShouldPersistTaps="handled"
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
  },
  modalContent: {
    width: screenWidth * 0.95, 
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  titleContainer: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "center",
  },
  title: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "600",
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 10,
    gap: 12,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#333",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
    gap: 10,
  },
  submitBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#1B263B",
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
  },
});
