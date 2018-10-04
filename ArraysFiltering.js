// REMOOVING OBJECTS WITH DUBLICATE PARAMETERS

var accounts = [
  {
    Domhoz: 12151511,
    Zone: "Д"
  },
  {
    Domhoz: 12151511,
    Zone: "Н"
  },
  {
    Domhoz: 1215155,
    Zone: "Д"
  },
  {
    Domhoz: 1215155,
    Zone: "Н"
  }
];

// modern variant

accounts = accounts.filter(function(thing, index, self) {
  return (
    index ===
    self.findIndex(function(t) {
      return t.Domhoz === thing.Domhoz;
    })
  );
});

//variant for old browsers

var accountsArray = [],
  domhoz = [];

for (var i in accounts) {
  if (domhoz.indexOf(accounts[i].Domhoz) === -1) {
    newArr.push(accounts[i]);
    domhoz.push(accounts[i].Domhoz);
  }
}

//variant for old browsers

var filteredAccounts;
var altArray = [];
for (var i = 0, len = accounts.length; i < len; i++) {
  filteredAccounts = accounts.filter(function(i) {
    return i.Zone === "Д";
  });
  altArray = filteredAccounts;
}

// FLITERING ARRAY BY ONE PROPERTY

var sidekicks = [
  {
    name: "Robin",
    hero: "Batman"
  },
  {
    name: "Supergirl",
    hero: "Superman"
  },
  {
    name: "Oracle",
    hero: "Batman"
  },
  {
    name: "Krypto",
    hero: "Superman"
  }
];

//with using IF

var batKicks = [];
for (var i = 0; i < sidekicks.length; i++) {
  if (sidekicks[i].hero === "Batman") {
    batKicks.push(sidekicks[i]);
  }
}

// modern variant

let batKicks = cart.filter(obj => obj.name === "Batman");

// variant for old browsers

var batKicks = sidekicks.filter(function(obj) {
  return el.obj === "Batman";
});

// combining filter with map function for extracting some parameters

var sortedBatKickNames = sidekicks
  .filter(function(el) {
    return el.hero === "Batman";
  })
  .map(function(el) {
    return el.name;
  })
  .sort();

// Outputs: ["Oracle", "Robin"];

// FILTERING OBJECTS ARRAY BY MYLTIPLE PROPERTY

var cart = [
  {
    name: "Drink",
    price: 3.12
  },
  {
    name: "Steak",
    price: 45.15
  },
  {
    name: "Drink",
    price: 11.01
  }
];

// modern variant

let expensiveDrinkOrders = cart.filter(x => x.name === "Drink" && x.price > 10);

// [{ name: "Drink", price: 11.01 }]

// modern variant

let expensiveDrinkOrders = cart
  .filter(x => x.name === "Drink")
  .filter(x => x.price > 10);

// [{ name: "Drink", price: 11.01 }]

// modern variant

const drinksGreaterThan10 = obj => obj.name === "Drink" && obj.price > 10;
let result = cart.filter(drinksGreaterThan10);

// variant for old browsers
var expensiveDrinkOrders = cart.filter(function(x) {
  return x.name === "Drink" && x.price > 10;
});
// [{ name: "Drink", price: 11.01 }]

// FILTERING ARRAY BY NUMBER HIGHER THAN 500000000

let data = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];

// modern variant

let cities = data.filter(val => {
  return val.population > 500000000;
});

// modern variant

let cities = data.filter(val => val.population > 500000000);

// variant for old browsers

var cities = data.filter(function(val) {
  return val.population > 500000000;
});
