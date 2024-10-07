import React, { useState } from "react";
import { Box, Button, Radio } from "native-base";
import { useMutation } from "@apollo/client";
import { NEW_ANSWER_MUTATION } from "./queries";

import { auth } from "../../firabase";

const Form = ({ options, setIsVoted, id }) => {
  const [selected, setSelected] = useState("");

  const [newAnswer, { loading }] = useMutation(NEW_ANSWER_MUTATION);
  handleSubmit = async () => {
    if (!selected) {
      return;
    }
    await newAnswer({
      variables: {
        option_id: selected,
        user_id: auth.currentUser?.uid,
        question_id: id,
      },
    });

    setIsVoted(true);
  };
  return (
    <Box py={3}>
      <Radio.Group value={selected} onChange={setSelected}>
        {options.map((option) => (
          <Radio key={option.id} value={option.id} my={1}>
            {option.text}
          </Radio>
        ))}
      </Radio.Group>

      <Button mt={5} onPress={handleSubmit} isLoading={loading}>
        Submit
      </Button>
    </Box>
  );
};

export default Form;
