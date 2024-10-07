import React from "react";
import { Box, Button, Heading } from "native-base";

import { auth } from "../../firabase";
import { signOut } from "firebase/auth";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      )
      .catch((error) => alert(error.message));
  };
  return (
    <Box justifyContent={"center"} alignItems={"center"} flex={1}>
      <Heading size={"md"}>Welcome, {auth.currentUser?.email}</Heading>
      <Button my={5} colorScheme={"danger"} onPress={handleSignOut}>
        Sign Out
      </Button>
    </Box>
  );
};

export default Profile;
