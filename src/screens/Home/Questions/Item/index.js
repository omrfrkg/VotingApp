//React Native
import { StyleSheet, Text, TouchableOpacity } from "react-native";

//React
import React from "react";

//Navigation
import { useNavigation } from "@react-navigation/native";
import { Box } from "native-base";

import DeleteButton from "./DeleteButton";
import { auth } from "../../../../firabase";

export default function Item({ data }) {
  const navigation = useNavigation();

  return (
    <Box style={styles.item}>
      <TouchableOpacity
        style={styles.titleBtn}
        onPress={() => navigation.navigate("Detail", { id: data.id })}
      >
        <Text style={styles.text}>{data.text}</Text>
      </TouchableOpacity>
      {auth.currentUser.uid === data.user_id && <DeleteButton id={data.id} />}
    </Box>
  );
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  titleBtn: {
    flex: 1,
    padding: 10,
  },
  removeBtn: { paddingVertical: 12, marginRight: 8 },
});
