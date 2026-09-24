import { Text, View, Pressable, StyleSheet } from "react-native";

export function TodoItem({ id, title, description, onDeleteItem }: { id: string; title: string; description: string; onDeleteItem: (id: string) => void }) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "white" }}
        press={({ pressed }) => pressed && styles.pressedItem} 
        onPress={() => onDeleteItem(id)}
      >
        <Text style={styles.todoItemText}>{title}</Text>
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
