import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/lostfound.png")}
      />
      <Text style={styles.text}>Lost and Found</Text>
      <Text style={styles.textMute}>
        Discover items near you and reconnect with owners
      </Text>

      {/* Navigate to home on button press */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("clicked")} // Navigate to home screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
    paddingBottom: 10,
    textAlign: "center",
  },
  textMute: {
    fontSize: 22,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#5271ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "90%",
    position: "absolute",
    bottom: 50, // Move button to the bottom
  },
  buttonText: {
    color: "white",
    fontSize: 22,
  },
});
