import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "native-base";
import Item from "./Item";

export default function List({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item data={item} />}
    />
  );
}

const styles = StyleSheet.create({});
