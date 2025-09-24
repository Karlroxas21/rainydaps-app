import { useTheme } from "@/app/context/ThemeContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import React, { PropsWithChildren, useState } from "react";
import {
  Image,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
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
  const { darkMode } = useTheme();

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
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalOverlay}>
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: Platform.OS === "ios" ? 20 : 20 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: darkMode ? "#000" : "#000" }]}>
                Add New Entry
              </Text>
              <Pressable onPress={onClose}>
                <MaterialIcons name="close" color="#000" size={24} />
              </Pressable>
            </View>

            {/* Body */}
            <View style={styles.addtoFund}>
              <Text style={{ fontWeight: "bold", color: "#000" }}>Add to Fund</Text>

              {/* Fund Options */}
              <View style={styles.addtoFundgroup}>
                {fundOptions.map((option) => (
                  <TouchableOpacity
                    key={option.title}
                    style={[
                      styles.optionCard,
                      {
                        borderColor: "#ccc",
                        backgroundColor: "#fff",
                      },
                      selectedFund === option.title && {
                        borderColor: "#396FDC",
                        backgroundColor: "#f1f5f9",
                      },
                    ]}
                    onPress={() => setSelectedFund(option.title)}
                  >
                    <View style={styles.textContainer}>
                      <Text style={[styles.optionTitle, { color: "#000" }]}>{option.title}</Text>
                      <Text style={[styles.optionDesc, { color: "#555" }]}>{option.description}</Text>
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
                      <View
                        style={[
                          styles.radioOuter,
                          { borderColor: "#1b263b" },
                        ]}
                      >
                        {selectedEntryType === type && (
                          <View style={[styles.radioInner, { backgroundColor: "#1b263b" }]} />
                        )}
                      </View>

                      <Text style={[styles.optionTitle, { color: "#000" }]}>{type}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Form */}
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={[styles.formText, { color: "#000" }]}>Amount</Text>
                  <TextInput
                    style={[styles.input, { backgroundColor: "#fff", borderColor: "#ccc", color: "#000" }]}
                    placeholder="Enter Amount"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={[styles.formText, { color: "#000" }]}>Description (optional)</Text>
                  <TextInput
                    style={[styles.input, { backgroundColor: "#fff", borderColor: "#ccc", color: "#000" }]}
                    placeholder="Enter Description"
                    placeholderTextColor="#888"
                    value={description}
                    onChangeText={setDescription}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={[styles.formText, { color: "#000" }]}>Photo Evidence (optional)</Text>

                  {photo && (
                    <View style={styles.previewContainer}>
                      <Image source={{ uri: photo }} style={styles.previewImage} />
                      <TouchableOpacity style={styles.deleteBtn} onPress={() => setPhoto(null)}>
                        <MaterialIcons name="close" size={20} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  )}

                  <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <MaterialIcons
                        name="photo-camera"
                        size={20}
                        color="#777"
                        style={{ marginRight: 6 }}
                      />
                      <Text style={{ color: "#777", fontWeight: "bold" }}>
                        {photo ? "Replace Photo" : "Upload Photo"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {selectedFund && (
                  <View style={[styles.fundcontribution, { backgroundColor: "#ccc" }]}>
                    <Text style={{ fontSize: 10, color: "#000" }}>Contributing to:</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                      {selectedFund}
                    </Text>
                  </View>
                )}

                <TouchableOpacity
                  style={[styles.submitBtn, { backgroundColor: "#1b263b" }]}
                  onPress={handleSubmit}
                  disabled={!selectedFund}
                >
                  <Text style={styles.submitBtnText}>
                    {selectedFund ? `Add to ${selectedFund}` : "Add to Fund"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    maxHeight: '80%',
    paddingBottom: 20,
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
