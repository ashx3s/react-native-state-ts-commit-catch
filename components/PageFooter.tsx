import { StyleSheet, View, Text } from "react-native";
import { colors } from "../assets/theme";
export function PageFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Track it. Check it. Ship it.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 14,
    color: colors.overlay,
  },
});
