import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { globalStyles, images } from "../styles/globalStyles";
import { TextInput } from "react-native-gesture-handler";
import { vw } from "react-native-expo-viewport-units";
import { AntDesign } from "@expo/vector-icons";
import FlatButton from "../components/Button";
import { Formik } from "formik";
import * as yup from "yup";

export default function ShoppingList() {
  const [value, onChangeText] = React.useState("");
  const [counterValue, setCounterValue] = React.useState(1);

  const addToCounter = () => {
    let newValue = counterValue + 1;
    setCounterValue(newValue);
  };
  const decreaseFromCounter = () => {
    if (counterValue > 1) {
      let newValue = counterValue - 1;
      setCounterValue(newValue);
    }
  };
  const reviewSchema = yup.object({
    productName: yup
      .string()
      .required()
      .min(4)
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={globalStyles.container}>
          <View style={styles.formWrapper}>
            <Formik
              validationSchema={reviewSchema}
              initialValues={{ productName: "" }}
              onSubmit={(values, actions) => {
                console.log(values.productName, counterValue);
                actions.resetForm();
                setCounterValue(1);
              }}
            >
              {props => {
                return (
                  <View>
                    <TextInput
                      style={styles.input}
                      onChangeText={props.handleChange("productName")}
                      value={props.values.productName}
                      placeholder="Wpisz nazwę produktu..."
                      onBlur={props.handleBlur("title")}
                    />
                    <Text style={globalStyles.errorText}>
                      {props.touched.productName && props.errors.productName
                        ? "Przynajmniej 4 znaki"
                        : null}
                    </Text>
                    <View style={styles.counter}>
                      <TouchableOpacity
                        onPress={decreaseFromCounter}
                        style={styles.icon}
                      >
                        <AntDesign
                          name="minuscircle"
                          size={32}
                          color="#e16c6c"
                        />
                      </TouchableOpacity>
                      <Text style={styles.counterValue}>
                        Ilość: {counterValue}
                      </Text>
                      <TouchableOpacity
                        onPress={addToCounter}
                        style={styles.icon}
                      >
                        <AntDesign
                          name="pluscircle"
                          size={32}
                          color="#729283"
                        />
                      </TouchableOpacity>
                    </View>
                    <FlatButton
                      textValue="Dodaj produkt"
                      onPress={props.handleSubmit}
                    />
                  </View>
                );
              }}
            </Formik>
          </View>
        </View>
        <View style={styles.listWrapper}></View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    width: vw(90),
    padding: vw(3)
  },
  listWrapper: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 12,
    marginVertical: 4,
    width: vw(90),
    alignSelf: "center"
  },
  counter: {
    marginBottom: 20,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "auto",
    alignItems: "center"
  },
  counterValue: {
    fontWeight: "bold",
    fontSize: 20
  },
  icon: {
    paddingHorizontal: 20
  },
  input: {
    height: 40,
    width: vw(80),
    alignSelf: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    paddingHorizontal: 20
  }
});
