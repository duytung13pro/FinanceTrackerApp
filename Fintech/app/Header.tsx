import React from "react";
import { Link } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { useAuth } from "./AuthContext";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  const { logout, isAuthenticated } = useAuth();
  const routes = ["Register", "Login", "Dashboard", "About", "Profile"];
  
  // Filter routes based on login status
  const filteredRoutes = routes.filter(route => {
    if (isAuthenticated) {
      return route !== "Register" && route !== "Login";
    }
    return true;
  });
  
  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
    <View style={style.navbar}>
      {/* Logo links */}
      <Link href="/" style={style.logoLink}>
        <Image
          source={require("@/assets/images/cloud-logo.svg")}
          style={style.headerLogo}
        />
      </Link>
      {/* Navigation links */}
      <div style={style.navigationLinks}>
        {filteredRoutes.map((route) => (
          <Link href={("/" + route) as any} style={style.navigationLink}>
            {route}
          </Link>
        ))}
        {isAuthenticated && (
          <TouchableOpacity 
            style={style.logoutButton} 
            onPress={handleLogout}
          >
            <Text style={style.logoutText}>Logout</Text>
          </TouchableOpacity>
        )}
      </div>
    </View>
  );
};

//HEADER DASHBOARD
const style = StyleSheet.create({
  navbar: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.dark.background,
  },
  logoLink: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLogo: {
    height: 50,
    width: 70,
  },
  navigationLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
  navigationLink: {
    color: Colors.dark.text,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#1CA7EC",
    padding: 8,
    borderRadius: 5,
  },
  logoutText: {
    color: "#ffffff",
    fontWeight: "500",
  },
});

export default Header;
