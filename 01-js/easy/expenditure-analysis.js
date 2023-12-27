/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  // transactions.forEach(transaction => {
    for (let transaction of transactions) {
      let existingCategory = result.find(item => item.category === transaction.category);

      if (existingCategory) {
        existingCategory.totalSpent += transaction.price;
      } else {
        result.push({ category: transaction.category, totalSpent: transaction.price });
      }
    };

  return result;
}
module.exports = calculateTotalSpentByCategory;
// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Burger',
//   },{
//     id: 1,
//     timestamp: 1656076800000,
//     price: 20,
//     category: 'Drink',
//     itemName: 'Redbull',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 20,
//     category: 'Drink',
//     itemName: 'Redbull',
//   },
// ];
// console.log(calculateTotalSpentByCategory(transactions))