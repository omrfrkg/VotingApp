import { gql } from "@apollo/client";

export const GET_QUESTIONS_SUBSCRIPTION = gql`
  subscription QuestionsSubscription {
    questions(order_by: { created_at: desc }) {
      id
      text
      user_id
    }
  }
`;

export const ADD_NEW_QUESTIONS_MUTATION = gql`
  mutation MyMutation(
    $title: String!
    $options: [options_insert_input!]!
    $user_id: String!
  ) {
    insert_questions_one(
      object: { text: $title, user_id: $user_id, options: { data: $options } }
    ) {
      id
      text
    }
  }
`;

export const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestion($id: Int!) {
    delete_questions_by_pk(id: $id) {
      id
    }
  }
`;
