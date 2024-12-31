import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types"; // Import RootStackParamList

// Type definition for navigation props in Login screen
type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true); // Show loading
    try {
      const response = await axios.post("http://localhost:3000/user/Login", {
        username,
        password,
      });
      console.log("Login Success");
      Alert.alert("Success", response.data.message);
      navigation.navigate("Home"); // Navigate back to Home screen
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.error || error.message || "Try Again"
      );
    } finally {
      setIsLoading(false); // Hide loading
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#B0B8C1"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#B0B8C1"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.LoginButton}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3A59",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#334B68",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    color: "#ffffff",
  },
  LoginButton: {
    backgroundColor: "#1CA7EC",
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
