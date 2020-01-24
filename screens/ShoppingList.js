import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Button
} from "react-native";
import { globalStyles, images } from "../styles/globalStyles";
import { TextInput } from "react-native-gesture-handler";
import { vw, vh } from "react-native-expo-viewport-units";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import FlatButton from "../components/Button";
import { Formik } from "formik";
import * as yup from "yup";
import uuid from "uuid";

import { ShoppingListContext } from "../contexts/shoppingListContext";

export default function ShoppingList() {
  const [counterValue, setCounterValue] = useState(1);
  const {
    itemsToBuy,
    addToList,
    setAlreadyInBasket,
    itemsInBasket,
    unsetAlreadyInBasket,
    clearList
  } = useContext(ShoppingListContext);

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
      .min(3)
  });
  const addNewProduct = (values, actions) => {
    const newProduct = {
      name: values.productName,
      count: counterValue,
      key: uuid()
    };
    addToList(newProduct);
    actions.resetForm();
    setCounterValue(1);
  };
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
                addNewProduct(values, actions);
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
                        ? "Przynajmniej 3 znaki"
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
        <ScrollView style={styles.listWrapper}>
          <View style={styles.listUl}>
            {itemsToBuy.map(item => {
              const { key, name, count } = item;
              return (
                <View style={styles.listItem} key={key}>
                  <Feather
                    name="square"
                    size={24}
                    onPress={() => setAlreadyInBasket(key)}
                    style={styles.itemIcon}
                  />
                  <Text style={styles.itemText}>{name}</Text>
                  <Text style={styles.itemText}>{count}</Text>
                </View>
              );
            })}
            {itemsInBasket.map(item => {
              const { key, name, count } = item;
              return (
                <View style={styles.listItem} key={key}>
                  <MaterialIcons
                    name="done"
                    size={24}
                    onPress={() => unsetAlreadyInBasket(key)}
                    style={styles.itemIcon}
                    color="#729283"
                  />
                  <Text style={styles.itemTextDone}>{name}</Text>
                  <Text>{count}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.footerBottons}>
          <FlatButton textValue="Wyczyść listę" onPress={clearList} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    width: vw(90),
    height: vh(30),
    padding: vw(3),
    alignSelf: "center"
  },
  listUl: {
    marginBottom: 10
  },
  listWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 12,
    marginVertical: 4,
    width: vw(90),
    paddingVertical: vw(3),
    height: vh(40),
    alignSelf: "center",
    overflow: "scroll"
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: vw(2.5),
    marginVertical: 5,
    marginHorizontal: vw(5),
    height: 30,
    textAlign: "center",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  itemText: {
    color: "#369AFF"
  },
  itemIcon: {
    paddingRight: 20
  },
  itemTextDone: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
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
  },
  footerBottons: {
    marginTop: vw(5)
  }
});
