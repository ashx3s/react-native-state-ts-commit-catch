import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../assets/theme";

export function AppButton({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.mauve,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.base,
    fontWeight: "600",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.7,
  },
});
