import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_QUESTION_DETAIL } from "./queries";
import Loading from "../../components/Loading";
import { Box, Divider, Heading } from "native-base";
import Form from "./Form";
import Result from "./Result";

import { auth } from "../../firabase";

const Detail = ({ route }) => {
  const { id } = route.params;
  const [isVoted, setIsVoted] = useState(false);

  const { loading, data } = useQuery(GET_QUESTION_DETAIL, {
    variables: {
      id,
      user_id: auth.currentUser?.uid,
    },
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <Loading />;
  }

  const { text, options, answers } = data.questions_by_pk;

  return (
    <Box p="3">
      <Heading>{text}</Heading>
      <Divider my={2} />
      {!isVoted && answers.length < 1 ? (
        <Form options={options} setIsVoted={setIsVoted} id={id} />
      ) : (
        <Result id={id} />
      )}
    </Box>
  );
};

export default Detail;
