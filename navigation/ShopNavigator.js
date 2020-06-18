import { createStackNavigator, createAppContainer } from "react-navigation";

import ProductsOverview from "../screens/shop/ProductsOverview";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverview,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.white : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
