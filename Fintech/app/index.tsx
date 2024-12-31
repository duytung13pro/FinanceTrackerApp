import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FeatureCard from "../components/FeatureCard";
import { RootStackParamList } from "./types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { withLayoutContext } from "expo-router";

// Define the typing for this component
type IndexProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Index() {
  // Typing the navigation hook
  const navigation = useNavigation<IndexProps>(); // Ensuring proper typing

  function testing() {
    console.log(1);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/cloud.png")}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/help-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/user-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Logo and Tagline */}
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>YouFinance</Text>
        <Text style={styles.tagline}>Elevating Your Personal Finance</Text>
      </View>

      {/* Feature Cards */}
      <View style={styles.features}>
        <FeatureCard
          title="Track expenses"
          image={require("@/assets/images/TrackExpenses.png")}
          onclick={testing}
        />
        <FeatureCard
          title="Set budgets"
          image={require("@/assets/images/SetBudget.png")}
          onclick={testing}
        />
        <FeatureCard
          title="Analyze spendings"
          image={require("@/assets/images/AnalyzeSpending.png")}
          onclick={testing}
        />
        <FeatureCard
          title="Build wealth"
          image={require("@/assets/images/BuildWealth.png")}
          onclick={testing}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("Login")} //Login
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Learn More */}
      <View style={styles.footer}>
        <Text style={styles.learnMoreText}>Learn More</Text>
        <Text style={styles.arrow}>↓</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3A59",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
  tagline: {
    fontSize: 16,
    color: "#B0B8C1",
    marginTop: 10,
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  registerButton: {
    backgroundColor: "#1CA7EC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  signInButton: {
    backgroundColor: "#334B68",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
  },
  learnMoreText: {
    color: "#B0B8C1",
    fontSize: 16,
  },
  arrow: {
    fontSize: 20,
    color: "#B0B8C1",
  },
});
