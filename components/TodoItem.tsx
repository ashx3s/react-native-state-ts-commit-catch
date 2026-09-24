import { Text, View, Pressable, StyleSheet } from "react-native";

export function TodoItem({
  text,
  id,
  onDeleteItem,
}: {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
}) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => [
          styles.todoItem,
          pressed && styles.pressedItem,
        ]}
        onPress={() => onDeleteItem(id)}
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
