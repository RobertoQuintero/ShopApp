import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";

const OrderItem = (props) => {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        title={!showDetails ? "Sow Details" : "Hide Details"}
        color={Colors.primary}
        onPress={() => {
          setshowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailsItems}>
          {props.items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: "open-sans",
    color: "#888",
  },
  detailsItems: {
    width: "100%",
  },
});
