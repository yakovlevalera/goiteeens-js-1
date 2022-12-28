// 1 завдання


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
  
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(key);
// };

  
// 2 завдання


// const countProps = function (obj) {
//     const values = Object.values(obj);
    
//     return values.length;
// };
  
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


// 3 завдання


// const findBestEmployee = function (employees) {
//     const keys = Object.keys(employees);
//     let bestResult = 0;
//     for (const key of keys) {
//       if (employees[key] > bestResult) {
//         bestResult = employees[key];
//         bestEmployment = key
//       };
//     }

//     return bestEmployment
//   };
  
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux


// 4 завдання


// const countTotalSalary = function (employees) {
//     const values = Object.values(employees);
//     let totalSalary = 0;
//     for (const value of values) {
//       totalSalary += value;
//     };

//     return totalSalary
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400


// 5 завдання


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const values = [];
//   for (const obj of arr) {
//     if (obj[prop] !== undefined) {
//       values.push(obj[prop]);
//     }
//   }

//   return values;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []


// 6 завдання


// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];
  
//   const calculateTotalPrice = function (allProdcuts, productName) {
//     let totalPrice = 0;
//     for (const product of allProdcuts) {
//       if (product.name ===  productName) {
//         totalPrice = product.price * product.quantity;
//       };
//     };

//     return totalPrice;
//   };
  
//   console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
//   console.log(calculateTotalPrice(products, 'Дроїд')); // 2800