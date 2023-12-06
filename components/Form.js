import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Form = ({ handleModal }) => {
  const createAppointment = () => {
    console.log("Creating appointment...");
    handleModal();
  };

  return (
    <View style={styles.form}>
      <TouchableOpacity style={styles.button} onPress={createAppointment}>
        <Text style={styles.textSubmit}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "97%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#252456",
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textSubmit: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Form;
