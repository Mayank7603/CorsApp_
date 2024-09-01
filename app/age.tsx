
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";

const Index = () => {
  const [selectedNumber, setSelectedNumber] = useState(18);

  const handleNext =()=>{
    router.push('/weight');
}
const handleBack=()=>{
    router.push('/gender');
}
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>How Old Are You?</Text>
        <Text style={styles.description}>
          You can always change it after.
        </Text>
      </View>

      <View style={styles.scrollContainer}>
        <Picker
          selectedValue={selectedNumber}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedNumber(itemValue)}
          itemStyle={styles.pickerItem} // Add this line to customize Picker item style
        >
          {/* Picker Items for numbers 18 to 50 */}
          {Array.from({ length: 33 }, (_, index) => (
            <Picker.Item key={index} label={`${18 + index}`} value={18 + index} />
          ))}
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 90,
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    display: 'flex',
    gap: 80
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "#999",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    justifyContent: "space-between",
    alignItems: 'center',
    width: "100%",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 300,
    width: '100%',
  },
  button: {
    backgroundColor: "#FFB84E",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  picker: {
    flex: 1,
    width: 300,   // Increased the width to make the Picker larger
    color: '#fff',  // Changed text color to light grey
  },
  pickerItem: {
    color: 'lightgrey',  // Optional: Can set item-specific color here
    fontSize: 18,        // Optional: Adjust font size if needed
  },
});

export default Index;
