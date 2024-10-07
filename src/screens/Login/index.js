import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Input, Toast } from "native-base";
import { auth } from "../../firabase";

import AlertBox from "../../components/AlertBox";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unSubscribe;
  }, []);

  const handleSignUp = () => {
    // if (!email || !password) {
    //   return alert("That email address is already in use!");
    // }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("user", user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("That email address is already in use!");
          setShowModal(true);
        }

        if (error.code === "auth/invalid-email") {
          setError("That email address is invalid!");
          setShowModal(true);
        }
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      }
    );
  };
  return (
    <Box p={6}>
      <Box mb={2}>
        <Heading mb="2">E-mail</Heading>
        <Input
          placeholder="Please enter your e-mail..."
          fontSize={20}
          borderColor="#686565"
          value={email}
          onChangeText={setEmail}
          autoCapitalize={false}
        />
      </Box>
      <Box mb={2}>
        <Heading mb="2">Password</Heading>
        <Input
          placeholder="Please enter your password..."
          fontSize={20}
          borderColor="#686565"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </Box>
      <Box mt={4}>
        <Button size={"lg"} onPress={handleLogin}>
          Login
        </Button>
        <Button
          variant={"outline"}
          mt={2}
          size={"lg"}
          onPress={handleSignUp}
          load
        >
          Register
        </Button>
      </Box>
      <AlertBox
        message={error}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Box>
  );
};

export default Login;
