import { StyleSheet, Text, View } from "react-native";
import Task from "../../components/task";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      {/* todos */}
      <View style={style.taskWrapper}>
        <Text style={style.items}>Today's Task</Text>
        <View>
          <Task text={"task one"} />
          <Task text={"task two"} />
          <Task text={"task three"} />
          <Task text={"task four"} />
        </View>
      </View>
      {/* todos */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
