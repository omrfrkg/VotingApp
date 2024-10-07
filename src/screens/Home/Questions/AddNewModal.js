//React Native
import { StyleSheet } from "react-native";

//React
import React, { useState } from "react";

//Native Base
import {
  Alert,
  Box,
  Button,
  CloseIcon,
  Collapse,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
  useToast,
  VStack,
} from "native-base";

//Ionicons
import Ionicons from "@expo/vector-icons/Ionicons";

//Query
import { ADD_NEW_QUESTIONS_MUTATION } from "./queries";
import { useMutation } from "@apollo/client";

import { auth } from "../../../firabase";

export default function AddNewModal({ closeModal }) {
  //Toast
  const toast = useToast();

  //Question Input Activity
  const [title, setTitle] = useState("");

  // Options Input Activity
  const [options, setOptions] = useState([{ text: "" }, { text: "" }]);

  const handleOptionChange = (val, i) => {
    const data = [...options];
    data[i].text = val;
    setOptions(data);
  };

  const handleNewOption = () => {
    if (options.length >= 5) {
      return;
    }
    setOptions((prev) => [...prev, { text: "" }]);
  };

  const handleRemoveOption = () => {
    if (options.length > 2) {
      setOptions((prev) => prev.slice(0, -1)); // Son input'u siler
    }
  };

  //Query Activity
  const [addNewQuestion, { loading, error }] = useMutation(
    ADD_NEW_QUESTIONS_MUTATION
  );

  //Save Button
  const handleSubmit = async () => {
    //Seçeneklerde boş olmayanları filtrele
    const options_data = options.filter((item) => item.text !== "");
    if (!title || options_data < 2) {
      return;
    }
    await addNewQuestion({
      variables: {
        title,
        user_id: auth.currentUser?.uid,
        options: options_data,
      },
    });

    closeModal();

    toast.show({
      title: "Question added!",
      placement: "bottom",
      status: "success",
    });
    console.log("result", result);
  };

  return (
    <Box backgroundColor="#ddd" flex={"1"}>
      <Box p={6} flex={1}>
        <Heading mb="2">Question</Heading>
        <Input
          placeholder="Enter a new question..."
          fontSize={20}
          borderColor="#686565"
          value={title}
          onChangeText={setTitle}
        />
        <Heading mt={6} mb={3}>
          Options
        </Heading>
        {options.map((item, i) => (
          <Input
            placeholder="Enter a new question..."
            fontSize={18}
            borderColor="#686565"
            mb={1}
            key={i}
            value={item.text}
            onChangeText={(val) => handleOptionChange(val, i)}
          />
        ))}

        <Box mt={2} flexDirection="row" justifyContent="flex-end">
          {/* Input eksiltme butonu */}
          <Button
            mr={5}
            colorScheme={"blueGray"}
            size={"xs"}
            disabled={options.length <= 2} // En az 2 input bırakmak için sınır
            onPress={handleRemoveOption}
            leftIcon={
              <Ionicons name="remove-circle" size={30} color={"#fff"} />
            }
          />
          {/* Yeni input ekleme butonu */}
          <Button
            colorScheme={"blueGray"}
            size={"xs"}
            //disabled={options.length >= 5}
            onPress={handleNewOption}
            leftIcon={<Ionicons name="add-circle" size={30} color={"#fff"} />}
          />
        </Box>
      </Box>
      <Box>
        <Button m={6} size={"lg"} onPress={handleSubmit} isLoading={loading}>
          Save
        </Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
