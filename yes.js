import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function Yes() {
    const [name, setName] = useState("");
    return (
      <View style={styles.container}>
        <Text>Write name.</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={(value) => setName(value.nativeEvent.text)}
        />
        <Text>Welcome, {name}!</Text>
      </View>
    );
  }