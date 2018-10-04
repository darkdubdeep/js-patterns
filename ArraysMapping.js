// MAPPING ARRAYS FOR GER RID OF USELESS PROPERITIES

var jsonData = [
  { id: 1, name: "Soda", price: 3.12, cost: 1.04, size: "4oz" },
  { id: 2, name: "Beer", price: 6.5, cost: 2.45, size: "8oz" },
  { id: 3, name: "Margarita", price: 12.99, cost: 4.45, size: "12oz" }
];

//modern variant
let drinkMenu = jsonData.map(x => ({ name: x.name, price: x.price }));

// modern variant

const toMenuItem = x => ({ name: x.name, price: x.price });
let drinkMenu = jsonData.map(toMenuItem);

// [{"name":"Soda","price":3.12}, {"name":"Beer","price":6.5}, {"name":"Margarita","price":12.99}]

// variant for old browsers

var toMenuItem = function toMenuItem(x) {
  return { name: x.name, price: x.price };
};
var drinkMenu = jsonData.map(toMenuItem);

// [{"name":"Soda","price":3.12}, {"name":"Beer","price":6.5}, {"name":"Margarita","price":12.99}]
