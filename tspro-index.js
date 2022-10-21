"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var orders_1 = require("./orders");
//getmaxprice will pull the maximum price for an item at a restaurant
var getMaxPrice = function (maxPrice) {
    switch (maxPrice) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
        default:
            return 30.0;
    }
};
//getOrders function using pricebracket to store order values; nested forEach to filter through restaurants and orders
var getOrders = function (price, orders) {
    var filteredOrders = [];
    orders.forEach(function (restaurants) {
        var filteredForRestaurant = restaurants.filter(function (order) { return order.price <= getMaxPrice(price); });
        filteredOrders.push(filteredForRestaurant);
    });
    return filteredOrders;
};
//printorders function for better formatting
var printOrders = function (restaurants, orders) {
    restaurants.forEach(function (restaurant, index) {
        if (orders[index].length > 0) {
            console.log(restaurant.name);
            orders[index].forEach(function (order) {
                console.log("- ".concat(order.name, ": ").concat(order.price));
            });
        }
    });
};
/// Main
var elligibleOrders = getOrders(orders_1.PriceBracket.High, orders_1.orders);
//console.log(elligibleOrders);
printOrders(restaurants_1.restaurants, elligibleOrders);
