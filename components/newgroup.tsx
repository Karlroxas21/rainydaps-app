import { useTheme } from "@/app/context/ThemeContext";
import Slider from "@react-native-community/slider";
import { PropsWithChildren, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function NewGroup({ isVisible, onClose }: Props) {
    const [goal, setGoal] = useState(20000); // default goal
    const { darkMode } = useTheme();

    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={isVisible}>
                <View style={styles.modalOverlay}>
                    <View
                        style={[
                            styles.modalContainer,
                            { backgroundColor: darkMode ? "#1E1E1E" : "#fff" },
                        ]}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={[styles.title, { color: darkMode ? "#fff" : "#000" }]}>
                                Add New Group
                            </Text>
                        </View>

                        {/* Group Name */}
                        <View style={styles.form}>
                            <View style={styles.formGroup}>
                                <Text style={[styles.formText, { color: darkMode ? "#ddd" : "#000" }]}>
                                    Group Name
                                </Text>
                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: darkMode ? "#444" : "#ccc",
                                            color: darkMode ? "#fff" : "#000",
                                            backgroundColor: darkMode ? "#2C2C2C" : "#fff",
                                        },
                                    ]}
                                    placeholder="e.g. Family Saver"
                                    placeholderTextColor={darkMode ? "#888" : "#888"}
                                />
                            </View>
                        </View>

                        {/* Goal with Slider */}
                        <View style={styles.form}>
                            <View style={styles.formGroup}>
                                <Text style={[styles.formText, { color: darkMode ? "#ddd" : "#000" }]}>
                                    Goal (₱{goal.toLocaleString()})
                                </Text>
                                <Slider
                                    style={{ width: "100%", height: 40 }}
                                    minimumValue={1000}
                                    maximumValue={100000}
                                    step={1000}
                                    value={goal}
                                    minimumTrackTintColor="#1b263b"
                                    maximumTrackTintColor={darkMode ? "#555" : "#ccc"}
                                    thumbTintColor="#1b263b"
                                    onValueChange={(value) => setGoal(value)}
                                />
                            </View>
                        </View>

                        {/* Action buttons */}
                        <View style={styles.buttonRow}>
                            <Pressable onPress={onClose} style={styles.cancelButton}>
                                <Text style={[styles.cancelText, { color: darkMode ? "#aaa" : "#888" }]}>
                                    Cancel
                                </Text>
                            </Pressable>
                            <Pressable
                                style={styles.createButton}
                                onPress={() => alert("Group Created!")}
                            >
                                <Text style={styles.createText}>Create</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        borderRadius: 18,
        width: "85%",
        padding: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    titleContainer: {
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    form: {
        marginTop: 5,
    },
    formGroup: {
        marginBottom: 10,
    },
    formText: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 13,
        padding: 10,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
    },
    cancelButton: {
        marginRight: 15,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    cancelText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    createButton: {
        backgroundColor: "#1B263B",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    createText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
});
