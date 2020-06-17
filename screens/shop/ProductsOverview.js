import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverview = () => {
  const products = useSelector((state) => state.products.availableProducts);
  //state: estado global-- products: el reducer-- availableProducts: la propiedad dentro del reducer
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default ProductsOverview;
