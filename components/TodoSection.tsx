import { StyleSheet, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { generateId } from "../utils/generateId";
import { useState } from "react";

export function TodoSection() {
  // TODO (state): Declare todos as state
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn useState" },
    {
      id: "2",
      title: "Practice typescript refactoring",
    },
  ]);

  const addTodoItem = (title) => {
    const newTodo = { id: generateId(), title };
    // add item to the existing array
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const deleteTodoItem = (id) => {
    // Delete item state logic
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id),
    );
  };

  return (
    <View style={styles.todoSection}>
      <TodoInput onAddTodo={addTodoItem} />
      <TodoList todos={todos} onDeleteItem={deleteTodoItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  todoSection: {
    padding: 20,
  },
});
