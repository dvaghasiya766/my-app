import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
          <Image
            source={require("../assets/goal.png")}
            style={{ width: 100, height: 100, marginBottom: 20 }}
          />
          <TextInput
            style={[styles.inputText, isFocused && styles.inputTextFocused]}
            placeholder="Your course goal!"
            placeholderTextColor="#fffdfdff"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            selectionColor="#fffdfdff"
          />
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.buttonWrapper}>
            <Button title="Cancel" onPress={onCancel} color="#ff3b30" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#6200ee" />
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
    backgroundColor: "#2C1A4D", // lighter deep purple
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  inputText: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#946dd6ff", // softer purple border
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#3B2769", // slightly lighter input bg
    color: "#F3E5F5", // very light lavender text
  },
  inputTextFocused: {
    borderColor: "#D1C4E9", // pale purple for focus
    backgroundColor: "#4A327F", // brighter purple when focused
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

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#1B1030", // deep purple background
//   },
//   inputContainer: {
//     width: "100%",
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   inputText: {
//     width: "100%",
//     borderWidth: 1,
//     borderColor: "#7E57C2", // lighter purple border
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: "#2E1A47", // darker purple input bg
//     color: "#EDE7F6", // light lavender text
//   },
//   inputTextFocused: {
//     borderColor: "#B388FF", // bright purple border on focus
//     backgroundColor: "#45245E", // slightly lighter focus background
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   },
//   buttonWrapper: {
//     flex: 1,
//     marginHorizontal: 5,
//     borderRadius: 8,
//     overflow: "hidden",
//   },
// });
