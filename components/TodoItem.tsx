import { Text, View, Pressable, StyleSheet } from "react-native";

export function TodoItem({ text, id }) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "white" }}
        press={({ pressed }) => pressed && styles.pressedItem} 
        onPress={props.onDeleteItem.bind(this, id)}
      >
        <Text style={styles.todoItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "rebeccapurple",
    marginVertical: 8,
    borderRadius: 8,
  },
  todoItemText: {
    color: "white",
    fontSize: 18,
    padding: 8,
  },
});
