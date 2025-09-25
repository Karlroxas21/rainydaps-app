import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useTheme } from "./context/ThemeContext";

const { width } = Dimensions.get("window");

export default function ProfileDetails() {
  const router = useRouter();
  const { darkMode } = useTheme();
  const [imageUri, setImageUri] = useState(
    "https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation
  const validatePassword = (pwd: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(pwd);
  };

  const isPasswordValid = validatePassword(password);
  const doPasswordsMatch = password === confirmPassword && password.length > 0;

  // open image picker
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // dynamic theme styles
  const theme = {
    background: darkMode ? "#1b263b" : "#f4f6f9",
    card: darkMode ? "#2e3a59" : "#fff",
    border: darkMode ? "#444" : "#ccc",
    text: darkMode ? "#fff" : "#000",
    placeholder: darkMode ? "#aaa" : "#888",
    error: "#EF4444",
    success: "#28a745",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.form, { backgroundColor: theme.card }]}>
        {/* Profile Image + Camera */}
        <View style={styles.imageWrapper}>
          <Image source={{ uri: imageUri }} style={styles.profileImage} />
          <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
            <Ionicons name="camera-outline" size={18} color={theme.text} />
          </TouchableOpacity>
        </View>

        {/* Full Name */}
        <View style={styles.formGroup}>
          <Text style={[styles.formText, { color: theme.text }]}>
            Full Name
          </Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: theme.card, borderColor: theme.border, color: theme.text },
            ]}
            placeholder="Full Name"
            placeholderTextColor={theme.placeholder}
          />
        </View>

        {/* Username */}
        <View style={styles.formGroup}>
          <Text style={[styles.formText, { color: theme.text }]}>Username</Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: theme.card, borderColor: theme.border, color: theme.text },
            ]}
            placeholder="Username"
            placeholderTextColor={theme.placeholder}
          />
        </View>

        {/* Password */}
        <View style={styles.formGroup}>
          <Text style={[styles.formText, { color: theme.text }]}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  flex: 1,
                  backgroundColor: theme.card,
                  borderColor: isPasswordValid ? theme.success : theme.error,
                  color: theme.text,
                },
              ]}
              placeholder="Password"
              placeholderTextColor={theme.placeholder}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={theme.text}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          {!isPasswordValid && password.length > 0 && (
            <Text style={[styles.errorText, { color: theme.error }]}>
              Must be 8+ chars, include upper, lower, number, and special char
            </Text>
          )}
        </View>

        {/* Confirm Password */}
        <View style={styles.formGroup}>
          <Text style={[styles.formText, { color: theme.text }]}>
            Confirm Password
          </Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  flex: 1,
                  backgroundColor: theme.card,
                  borderColor: doPasswordsMatch ? theme.success : theme.error,
                  color: theme.text,
                },
              ]}
              placeholder="Confirm Password"
              placeholderTextColor={theme.placeholder}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={20}
                color={theme.text}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          {!doPasswordsMatch && confirmPassword.length > 0 && (
            <Text style={[styles.errorText, { color: theme.error }]}>
              Passwords do not match
            </Text>
          )}
        </View>

        {/* Buttons */}
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text style={[styles.discardBtn, { color: theme.text }]}>Discard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.saveBtn,
              { opacity: isPasswordValid && doPasswordsMatch ? 1 : 0.5 },
            ]}
            disabled={!isPasswordValid || !doPasswordsMatch}
          >
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

ProfileDetails.options = {
  title: "Profile Details",
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  form: {
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    width: "100%",
    maxWidth: width * 0.95,
    paddingBottom: 20,
  },
  formGroup: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  formText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 10,
    fontSize: 14,
    padding: 10,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -35,
    padding: 10,
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
  },
  profileImage: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 100,
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: width * 0.36,
    borderRadius: 20,
    padding: 4,
    backgroundColor: "#ccc",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  discardBtn: {
    fontWeight: "bold",
    fontSize: 15,
    padding: 6,
    paddingHorizontal: 20,
  },
  saveBtn: {
    backgroundColor: "#1b263b",
    borderRadius: 8,
    marginLeft: 10,
    paddingHorizontal: 25,
    paddingVertical: 6,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
