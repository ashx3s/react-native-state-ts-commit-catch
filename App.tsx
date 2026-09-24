import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageHeader } from "./components/PageHeader";
import { PageFooter } from "./components/PageFooter";
import { TodoSection } from "./components/TodoSection";
import { colors } from "./assets/theme";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.scrollContent}>
        <PageHeader />
        <TodoSection />
        <PageFooter />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.base,
  },
  scrollContent: {
    paddingBottom: 32,
  },
});
