import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import { useRouter } from 'expo-router';
import { toast } from "react-toastify";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "./types";

// Type definition for navigation props in Register screen
type RegisterProps = NativeStackScreenProps<RootStackParamList, "Register">;

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 201) {
        //toast.success(response.data.message);
        toast.success(response.data.message, {
          autoClose: 3000, 
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          router.replace("/");
        }, 3500);

      } else {
        toast.error(response.data.message);
      } 

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          // Handle the 401 error
          toast.error("Username already exists. Please try a different one!");
        } else if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Error registering user!");
        }
      }
    
        
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.nameContainer}>
        <TextInput
          style={styles.input}
          placeholder="First name"
          placeholderTextColor="#B0B8C1"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          placeholderTextColor="#B0B8C1"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#B0B8C1"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#B0B8C1"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={isLoading}>
        {isLoading ? <ActivityIndicator size="small" color="#ffffff" /> : <Text style={styles.buttonText}>Register</Text>}
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
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 400,
    gap: 20,
  },
  input: {
    backgroundColor: "#334B68",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    color: "#ffffff",
    width: 400,
  },
  registerButton: {
    backgroundColor: "#1CA7EC",
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Register;
