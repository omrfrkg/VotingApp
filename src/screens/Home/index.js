//React Native
import { Modal, StyleSheet, View, Text, Alert } from "react-native";

//React
import React, { useState } from "react";

//Screens
import Questions from "./Questions";
import AddNewModal from "./Questions/AddNewModal";

//Components
import IconButton from "../../components/IconButton";

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon_name={"add-outline"}
          onPress={() => setModalVisible((prev) => !prev)}
        />
      ),
      headerLeft: () => (
        <IconButton
          icon_name={"person-circle-outline"}
          onPress={() => navigation.navigate("Profile")}
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Questions />
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <AddNewModal closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
