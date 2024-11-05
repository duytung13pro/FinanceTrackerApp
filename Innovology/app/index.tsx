import { Text, View, Image, TouchableOpacity } from "react-native";
import React from 'react';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#246a97",
      }}
    >
      <Image 
        source={require('../assets/images/financial.png')} 
        style={{ width: 178, height: 265, resizeMode: 'contain', marginBottom: 71, marginTop: -81}} 
      />
      <Text
        style={{ 
          fontSize: 16, 
          color: '#ffffff', 
          textAlign: 'center', 
          fontWeight: 'bold',
        }}
      >
        An all-in-one  financial tracker powered by AI
      </Text>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ color: '#ffffff', fontSize: 16 }}>✓ Main Feature 1</Text>
        <Text style={{ color: '#ffffff', fontSize: 16 }}>✓ Main Feature 2</Text>
        <Text style={{ color: '#ffffff', fontSize: 16 }}>✓ Main Feature 3</Text>
      </View>
      <TouchableOpacity 
        style={{ 
          backgroundColor: '#1CA7EC', // Button color
          borderRadius: 30, // Half of the height for oval shape
          paddingVertical: 20, // Vertical padding
          paddingHorizontal: 30, // Horizontal padding
          marginTop: 50, // Space above the button
        }}
        onPress={() => alert('Button Pressed!')} // Action on button press
      >
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Get Started</Text> 
      </TouchableOpacity>
    </View>
  );
}
