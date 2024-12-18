import { StyleSheet, Text, View } from "react-native";
import Task from "../../components/task";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      {/* todos */}
      <View style={style.taskWrapper}>
        <Text style={style.items}>Today's Task</Text>
      </View>
      {/* todos */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
});
