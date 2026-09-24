import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { AppButton } from "./AppButton";
import { colors } from "../assets/theme";

export function TodoInput({ onAddTodo }) {
  // TODO (state): replace this with a useState hook so the TextInput is
  const [enteredTodo, setEnteredTodo] = useState("");
  // const enteredTodo = "placeholder Text";

  // TODO (state): update enteredTodo with the text the user typed.
  const inputHandler = (text) => {
    setEnteredTodo(text);
  };

  const addTodoHandler = () => {
    // TODO (logic): call onAddTodo(enteredTodo) to send the new todo up
    // to TodoSection
    onAddTodo(enteredTodo);
    // TODO (state): clear the input field afterwards (reset enteredTodo
    // back to "")
    setEnteredTodo("");
  };

  const cancelHandler = () => {
    // TODO (state): clear the input field without adding a todo
    setEnteredTodo("");
  };

  return (
    <View style={styles.inputSection}>
      <Text style={styles.inputSectionTitle}>Add a Todo</Text>
      {/* TODO: implement onChangeText, value, placeholder, placeholderTextColor, and style */}
      <TextInput
        onChangeText={inputHandler}
        value={enteredTodo}
        placeholder={"Input your todo here"}
        placeholderTextColor={colors.overlay}
        style={styles.textInput}
      />
      <Text style={styles.inputHint}>
        Type a task above, then tap Add Todo.
      </Text>
      <View style={styles.buttonContainer}>
        {/* TODO: wire onPress to addTodoHandler */}
        <AppButton text="Add Todo" onPress={addTodoHandler} />
        {/* TODO: wire onPress to cancelHandler */}
        <AppButton text="Cancel" onPress={cancelHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputSection: {
    backgroundColor: colors.surface0,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
  },
  inputSectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: colors.mantle,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.surface1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  inputHint: {
    fontSize: 13,
    color: colors.overlay,
    marginTop: 8,
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
    gap: 12,
  },
});
