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
  let categor={};
  for (const tx of transactions)
  {
    
    if(!categor[tx.category])
    {
      categor[tx.category]=0;
    }
    categor[tx.category]+=tx.price;

  }
  const res=[]
  for(let i in categor)
  {
    res.push({
      category:i,
      totalSpent:categor[i]

    });
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
