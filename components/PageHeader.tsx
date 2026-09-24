import { StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/theme";

export function PageHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Check It!</Text>
      <Text style={styles.headerSubtitle}>Where the tasks never end</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.mantle,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.surface0,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.lavender,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.subtext,
    marginTop: 4,
  },
});
