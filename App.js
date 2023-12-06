import React, { useState } from "react";

import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";

import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form handleModal={handleModal} />
      <Modal visible={showModal} animationType="slide">
        <Text>Test</Text>
        <TouchableOpacity onPress={handleModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
