import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverview = () => {
  const products = useSelector((state) => state.products.availableProducts);
  //state: estado global-- products: el reducer-- availableProducts: la propiedad dentro del reducer
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};
ProductsOverview.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverview;
