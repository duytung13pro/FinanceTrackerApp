import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";

export default function Header() {
  const routes = ["Register", "Login", "Dashboard", "About", "Profile"];

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
        {routes.map((route) => (
          <Link href={("/" + route) as any} style={style.navigationLink}>
            {route}
          </Link>
        ))}
      </div>
    </View>
  );
}

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
});
