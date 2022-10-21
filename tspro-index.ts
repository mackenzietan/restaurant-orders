import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

//getmaxprice will pull the maximum price for an item at a restaurant
const getMaxPrice = (maxPrice: PriceBracket) => {
  switch (maxPrice) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      return 30.0;
  }
};

//getOrders function using pricebracket to store order values; nested forEach to filter through restaurants and orders
const getOrders = (price: PriceBracket, orders: Order[][]) => {
  let filteredOrders: Order[][] = [];
  orders.forEach(restaurants => {
    const filteredForRestaurant = restaurants.filter(order => order.price <= getMaxPrice(price));
    filteredOrders.push(filteredForRestaurant);
  });
  return filteredOrders;
};

//printorders function for better formatting
const printOrders = (restaurants: Restaurant[], orders: Order[][]) => {
  restaurants.forEach((restaurant: Restaurant, index: number) => {
    if (orders[index].length > 0) {
      console.log(restaurant.name);
      orders[index].forEach((order) => {
        console.log(`- ${order.name}: ${order.price}`);
      })
    }
  });
};

/// Main
const elligibleOrders = getOrders(PriceBracket.High, orders);

printOrders(restaurants, elligibleOrders);
