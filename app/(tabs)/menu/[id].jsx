import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const UserDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>UserDetails + {id}</Text>
    </View>
  );
};
export default UserDetails;
const styles = StyleSheet.create({});
