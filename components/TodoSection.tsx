import { StyleSheet, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { generateId } from "../utils/generateId";

export function TodoSection() {
  // TODO (state): Declare todos as state
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn useState" },
    {
      id: "2",
      text: "Practice typescript refactoring",
    },
  ]);

  const addTodoItem = (title) => {
    const newTodo = { id: generateId(), title };
    // add item to the existing array
    setTodos([...todos, newTodo]);
  };

  const deleteTodoItem = (id) => {
    // Delete item state logic
    setTodos(todos.filter((todo) => todo.id !== id));
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
