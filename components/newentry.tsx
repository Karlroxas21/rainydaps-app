import { useTheme } from "@/app/context/ThemeContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import React, { PropsWithChildren, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

const fundOptions = [
  { title: "Personal Fund", description: "Your own contributions and savings" },
  { title: "Family Savers", description: "5 Members" },
];

const entryTypes = ["Deposit", "Withdraw"];

export default function AddNewEntry({ isVisible, onClose }: Props) {
  const { darkMode } = useTheme(); // ✅ dark mode

  const [selectedFund, setSelectedFund] = useState<string | null>(null);
  const [selectedEntryType, setSelectedEntryType] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [photo, setPhoto] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!selectedFund || !selectedEntryType || !amount) {
      alert("Please fill in all required fields.");
      return;
    }

    const entryData = {
      fund: selectedFund,
      entryType: selectedEntryType,
      amount,
      description,
      photo,
    };

    console.log("Submitting entry:", entryData);
    alert(`Added to ${selectedFund}`);
    onClose();
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: darkMode ? "#0D1B2A" : "#fff" },
          ]}
        >
          {/* Header */}
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: darkMode ? "#fff" : "#000" }]}>
              Add New Entry
            </Text>
            <Pressable onPress={onClose}>
              <MaterialIcons
                name="close"
                color={darkMode ? "#fff" : "#000000"}
                size={20}
              />
            </Pressable>
          </View>

          {/* Body */}
          <View style={styles.addtoFund}>
            <Text style={{ fontWeight: "bold", color: darkMode ? "#fff" : "#000" }}>
              Add to Fund
            </Text>

            {/* Fund Options */}
            <View style={styles.addtoFundgroup}>
              {fundOptions.map((option) => (
                <TouchableOpacity
                  key={option.title}
                  style={[
                    styles.optionCard,
                    {
                      borderColor: darkMode ? "#444" : "#ccc",
                      backgroundColor: darkMode ? "#1B263B" : "#fff",
                    },
                    selectedFund === option.title && {
                      borderColor: "#396FDC",
                      backgroundColor: darkMode ? "#274472" : "#f1f5f9",
                    },
                  ]}
                  onPress={() => setSelectedFund(option.title)}
                >
                  <View style={styles.textContainer}>
                    <Text style={[styles.optionTitle, { color: darkMode ? "#fff" : "#000" }]}>
                      {option.title}
                    </Text>
                    <Text style={[styles.optionDesc, { color: darkMode ? "#ccc" : "#555" }]}>
                      {option.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Entry Type */}
            <View style={{ padding: 20 }}>
              <View style={styles.entryType}>
                {entryTypes.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={styles.radioRow}
                    onPress={() => setSelectedEntryType(type)}
                  >
                    {/* Radio button */}
                    <View
                      style={[
                        styles.radioOuter,
                        { borderColor: darkMode ? "#fff" : "#1b263b" },
                      ]}
                    >
                      {selectedEntryType === type && (
                        <View
                          style={[
                            styles.radioInner,
                            { backgroundColor: darkMode ? "#4DA3FF" : "#1b263b" },
                          ]}
                        />
                      )}
                    </View>

                    {/* Label */}
                    <Text style={[styles.optionTitle, { color: darkMode ? "#fff" : "#000" }]}>
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={[styles.formText, { color: darkMode ? "#fff" : "#000" }]}>Amount</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: darkMode ? "#274472" : "#fff",
                      borderColor: darkMode ? "#444" : "#ccc",
                      color: darkMode ? "#fff" : "#000",
                    },
                  ]}
                  placeholder="Enter Amount"
                  placeholderTextColor={darkMode ? "#aaa" : "#888"}
                  keyboardType="numeric"
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={[styles.formText, { color: darkMode ? "#fff" : "#000" }]}>
                  Description (optional)
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: darkMode ? "#274472" : "#fff",
                      borderColor: darkMode ? "#444" : "#ccc",
                      color: darkMode ? "#fff" : "#000",
                    },
                  ]}
                  placeholder="Enter Description"
                  placeholderTextColor={darkMode ? "#aaa" : "#888"}
                  value={description}
                  onChangeText={setDescription}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={[styles.formText, { color: darkMode ? "#fff" : "#000" }]}>
                  Photo Evidence (optional)
                </Text>

                {photo && (
                  <View style={styles.previewContainer}>
                    <Image source={{ uri: photo }} style={styles.previewImage} />
                    <TouchableOpacity style={styles.deleteBtn} onPress={() => setPhoto(null)}>
                      <MaterialIcons name="close" size={20} color="#fff" />
                    </TouchableOpacity>
                  </View>
                )}

                <TouchableOpacity
                  style={[
                    styles.uploadBtn,
                    { borderColor: darkMode ? "#444" : "#ccc" },
                  ]}
                  onPress={pickImage}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialIcons
                      name="photo-camera"
                      size={20}
                      color={darkMode ? "#ccc" : "#777"}
                      style={{ marginRight: 6 }}
                    />
                    <Text style={{ color: darkMode ? "#ccc" : "#777", fontWeight: "bold" }}>
                      {photo ? "Replace Photo" : "Upload Photo"}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {selectedFund && (
                <View
                  style={[
                    styles.fundcontribution,
                    { backgroundColor: darkMode ? "#274472" : "#ccc" },
                  ]}
                >
                  <Text style={{ fontSize: 10, color: darkMode ? "#fff" : "#000" }}>
                    Contributing to:
                  </Text>
                  <Text style={{ fontWeight: "bold", fontSize: 14, color: darkMode ? "#fff" : "#000" }}>
                    {selectedFund}
                  </Text>
                </View>
              )}

              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  { backgroundColor: darkMode ? "#396FDC" : "#1b263b" },
                ]}
                onPress={handleSubmit}
                disabled={!selectedFund}
              >
                <Text style={styles.submitBtnText}>
                  {selectedFund ? `Add to ${selectedFund}` : "Add to Fund"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles unchanged except dynamic colors added in JSX
const styles = StyleSheet.create({
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addtoFund: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  addtoFundgroup: {
    marginTop: 10,
  },
  optionCard: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 8,
  },
  optionCardSelected: {
    borderColor: "#1b263b",
    backgroundColor: "#f1f5f9",
  },
  textContainer: {
    flexDirection: "column",
    flexShrink: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  optionDesc: {
    fontSize: 13,
    marginTop: 2,
  },
  entryType: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  form: {
    marginTop: 5,
  },
  formGroup: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  formText: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 5,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 13,
    padding: 10,
  },
  uploadBtn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginTop: 5,
  },
  previewContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  previewImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  deleteBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 12,
    padding: 2,
  },
  fundcontribution: {
    borderRadius: 10,
    width: "95%",
    padding: 8,
    alignSelf: "center",
    marginBottom: 10,
  },
  submitBtn: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  submitBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
