import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface FeatureCardProps {
    title: string;
    image: any;
}

export default function FeatureCard({ title, image }: FeatureCardProps) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        width: "45%",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        marginVertical: 10,
        elevation: 3, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#2E3A59",
        textAlign: "center",
    },
});
