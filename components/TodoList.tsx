import { FlatList, StyleSheet, Text, View } from "react-native";
import { TodoItem } from "./TodoItem";
import { colors } from "../assets/theme";

type Todo = {
  id: string;
  title: string;
  description: string;
  onDeleteItem: (id: string) => void;
};

type TodoListProps = {
  todos: Todo[];
  onDeleteItem: (id: string) => void;
};

export function TodoList({ todos, onDeleteItem }: TodoListProps) {
  return (
    <View style={styles.todoListContainer}>
      <Text style={styles.todoSectionTitle}>Your Todos</Text>
      <FlatList
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={(itemData) => {
          return (
            <TodoItem
              id={itemData.item.id}
              title={itemData.item.title}
              description={itemData.item.description}
              onDeleteItem={onDeleteItem}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoListContainer: {
    marginTop: 20,
  },
  todoSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
});
