import { View, Text } from "react-native";
import React from "react";
import { Center, HStack, Alert, Modal, WarningIcon } from "native-base";

const AlertBox = ({ message, showModal, setShowModal }) => {
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <HStack flexShrink={2} space={2} alignItems="center">
              <WarningIcon />
              <Text fontSize="md" fontWeight="large" color="coolGray.800">
                Registration Failed!
              </Text>
            </HStack>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default AlertBox;
