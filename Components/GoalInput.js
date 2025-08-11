import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export default function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputText, isFocused && styles.inputTextFocused]}
            placeholder="Your course goal!"
            placeholderTextColor="#888"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            selectionColor="#6200ee"
          />
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.buttonWrapper}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#6200ee" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Cancel" onPress={onCancel} color="#ff3b30" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
  },
  inputTextFocused: {
    borderColor: "#6200ee",
    backgroundColor: "#f3eaff",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
});
