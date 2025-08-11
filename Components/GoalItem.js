import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, goalId }) {
  function handleDelete() {
    onDeleteItem(goalId);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={handleDelete}
        android_ripple={{ color: "#3700b3" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressedItem,
        ]}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 5,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#6200ee",
  },
  pressable: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
  },
});
