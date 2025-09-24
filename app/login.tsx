import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();


  const handleLogin = () => {
    router.replace("/(tabs)/dashboard");
  }; 

  return (
    <View style={styles.container}>

      <Text style={styles.title}>RainyDays</Text>
      <Text style={styles.subtitle}>Build your financial safety net together</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        <Link href="/" style={{ marginBottom: 5, color: '#3498db', textAlign: 'right' }}>Forgot Password?</Link>

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don’t have an account?{" "}
          <Link href="/signup" style={styles.signupLink}>
            Sign Up
          </Link>
        </Text>
      </View>
      <View style={styles.featureContainer}>
            <View style={styles.feature}>
                <Text style={styles.featureText}>💰 Track</Text>
            </View>
            <View style={styles.feature}>
                <Text style={styles.featureText}>☔ Save</Text>
            </View>
            <View style={styles.feature}>
                <Text style={styles.featureText}>📈 Grow</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9", 
    justifyContent: "center",
    paddingHorizontal: 20,
  },
featureContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  feature: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  featureText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#1b263b",
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c3e50",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 30,
    textAlign: "center"
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#1b263b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  signupText: {
    textAlign: "center",
    color: "#7f8c8d",
  },
  signupLink: {
    color: "#3498db",
    fontWeight: "600",
  },
});
