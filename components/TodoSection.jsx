import { StyleSheet, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { generateId } from "../utils/generateId";
import { useState } from "react";

export function TodoSection() {
  // TODO (state): Declare todos as state
  
  
  const [todos, setTodos] = useState ([
    { id: "1", text: "Learn useState" },
    {
      id: "2",
      text: "Practice typescript refactoring",
    },
  ]);

  const addTodoItem = (title) => {
    const newTodo = { id: generateId(), title };
    // add item to the existing array - Done?
    setItems((prevTodos) => [...prevTodos, newTodo]);
    // Changes the state of the array, to a new array

  };

  const deleteTodoItem = (id) => {
    // Delete item state logic - Done?
    setItems((prevTodos) => prevTodos.filter((todos) => todos.id !== id));
    // Filters out any elememt in the array that matches the provided id and updates it to that state
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
