import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FeatureCard from "./FeatureCard";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/icons/cloud-icon.png")}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require("../assets/icons/search-icon.png")} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/help-icon.png")} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/profile-icon.png")} style={styles.icon} />
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
        <FeatureCard title="Track expenses" image={require("../assets/icons/track-icon.png")} />
        <FeatureCard title="Set budgets" image={require("../assets/icons/budget-icon.png")} />
        <FeatureCard title="Analyze spendings" image={require("../assets/icons/analyze-icon.png")} />
        <FeatureCard title="Build wealth" image={require("../assets/icons/wealth-icon.png")} />
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
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
