import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, Progress } from "native-base";

const Item = ({ item, total }) => {
  return (
    <Box my={3}>
      <Heading size={"sm"} mb={3}>
        {item.text}(%
        {((item.answers_aggregate.aggregate.count * 100) / total).toFixed(1)})
        {" - "}
        {item.answers_aggregate.aggregate.count} total
      </Heading>
      <Progress
        value={item.answers_aggregate.aggregate.count}
        max={total}
        my={3}
        size={"lg"}
      />
    </Box>
  );
};

export default Item;
