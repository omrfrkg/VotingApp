import { useQuery, useSubscription } from "@apollo/client";
import React from "react";
import { Text } from "react-native";
import { GET_QUESTIONS_SUBSCRIPTION } from "./queries";
import List from "./List";
import Loading from "../../../components/Loading";
import EmptyList from "../../../components/EmptyList";

function Questions() {
  const { loading, error, data } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  return (
    <>
      {data.questions.length > 0 ? (
        <List data={data.questions} />
      ) : (
        <EmptyList message={"No surveys yet."} />
      )}
    </>
  );
}

export default Questions;
