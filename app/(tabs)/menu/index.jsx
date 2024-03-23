import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";

const Menu = () => {
  return (
    <View>
      <Link href={`/menu/1`}>Meal 1</Link>
      <Pressable onPress={() => router.push("/menu/2")}>
        <Text>Meal 2</Text>
      </Pressable>
    </View>
  );
};
export default Menu;
const styles = StyleSheet.create({});
