import { createStackNavigator, createAppContainer } from "react-navigation";

import ProductsOverview from "../screens/shop/ProductsOverview";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverview,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.white : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
