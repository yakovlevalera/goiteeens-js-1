// const users = [
//     {
//       id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       id: '249b6175-5c30-44c6-b154-f120923736f5',
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ];


// 1 завдання


// const getUserNames = users => {
//   const userNames = users.map(user => user.name);
//   return userNames
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

  
// 2 завдання


// const getUsersWithEyeColor = (users, color) => {
//     const usersWithEyeColor = users.filter(function (user) {
//       return  user.eyeColor === color;
//     })
    
//     return usersWithEyeColor
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]


// 3 завдання

  
// const getUsersWithGender = (users, gender) => {
//  const usersWithGender = users.filter(function (user) {
//   return user.gender === gender;
//  });
  
//  return usersWithGender
// };
  
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  

// 4 завдання


// const getInactiveUsers = users => {
//   const inactiveUsers = users.filter(user => !user.isActive)
//   return inactiveUsers;
// };

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
  

// 5 завдання


// const getUserWithEmail = (users, email) => {
//     const userWithEmail = users.find(function (user) {
//       return user.email === email;
//     });
  
//     return userWithEmail;
// };
  
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

  
// 6 завдання


// const getUsersWithAge = (users, min, max) => {
//     const usersWithAge = users.filter(function (user) {
//      return min <= user.age && user.age <= max;
//     })
  
//     return usersWithAge
// };
  
// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]


// 7 завдання


// const calculateTotalBalance = users => {
//     let balance = 0;
//    for (const user of users) {
//       balance += user.balance;
//     };
  
//     return balance;
// };
  
// console.log(calculateTotalBalance(users)); // 20916


// 8 завдання


// const getUsersWithFriend = (users, friendName) => {
//     const usersWithFriend = users.filter(function (user) {
//       return user.friends.includes(friendName);
//     });
//     return usersWithFriend
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// 9 завдання


// const getNamesSortedByFriendsCount = users => {
//     return  users.sort((user1, user2)=>user1.friends.length - user2.friends.length)
//   };
  
// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// 10 завдання


// const getSortedUniqueSkills = users => {
//     return users.reduce((acc, { skills }) => [...acc, ...skills],[])
//       .filter((skill, index, arr) => arr.indexOf(skill) === index)
//     .sort()
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]