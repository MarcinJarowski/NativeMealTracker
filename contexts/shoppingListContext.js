import React, { useState, createContext } from "react";
import uuid from "uuid";
export const ShoppingListContext = createContext();

const ShoppingListContextProvider = props => {
  const [itemsToBuy, setItems] = useState([]);
  const [itemsInBasket, setItemsInBasket] = useState([]);

  let contextFunctions = {
    addToList: object => {
      setItems([object, ...itemsToBuy]);
    },
    clearList: () => {
      setItems([]);
      setItemsInBasket([]);
    },
    setAlreadyInBasket: key => {
      const selectedProduct = itemsToBuy.find(product => product.key === key);
      const itemsToBuyAfter = itemsToBuy.filter(product => product.key !== key);
      setItems(itemsToBuyAfter);
      setItemsInBasket([selectedProduct, ...itemsInBasket]);
    },
    unsetAlreadyInBasket: key => {
      const selectedProduct = itemsInBasket.find(
        product => product.key === key
      );
      const itemsToBuyAfter = itemsInBasket.filter(
        product => product.key !== key
      );
      setItems([selectedProduct, ...itemsToBuy]);
      setItemsInBasket(itemsToBuyAfter);
    },
    itemsToBuy,
    itemsInBasket
  };
  return (
    <ShoppingListContext.Provider value={contextFunctions}>
      {props.children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
