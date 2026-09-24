import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { generateId } from "../utils/generateId";

type Todo = {
  id: string;
  title: string;
};

export function TodoSection() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn useState" },
    { id: "2", title: "Practice typescript refactoring" },
  ]);

  const addTodoItem = (title: string): void => {
    const newTodo: Todo = { id: generateId(), title };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoItem = (id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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
