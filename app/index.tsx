// App.js
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert , ImageBackground} from "react-native";
import { MotiView, MotiText } from "moti";
import bg from "@/assets/images/intro.png";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggle between login and signup
  const toggleForm = () => setIsLogin((prev) => !prev);

  // Handle login action
  const handleLogin = () => {
    if (email && password) {
      // Add your login logic here
      Alert.alert("Login Successful", `Welcome back, ${email}!`);
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  };

  // Handle signup action
  const handleSignup = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        // Add your signup logic here
        Alert.alert("Signup Successful", `Welcome, ${email}!`);
      } else {
        Alert.alert("Error", "Passwords do not match.");
      }
    } else {
      Alert.alert("Error", "Please fill in all fields.");
    }
  };

  return (
       <ImageBackground source={bg} style={styles.image}>
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
        style={styles.formContainer}
      >
        <MotiText
          from={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 300 }}
          style={styles.title}
        >
          {isLogin ? "Login" : "Sign Up"}
        </MotiText>

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {!isLogin && (
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={isLogin ? handleLogin : handleSignup}>
          <Text style={styles.buttonText}>{isLogin ? "Login" : "Sign Up"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleForm}>
          <Text style={styles.toggleText}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>
      </MotiView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",

  },
  formContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  toggleText: {
    color: "#3498db",
    marginTop: 15,
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  }
});
