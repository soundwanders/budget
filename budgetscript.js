//budget app.js

//get div wrapper from index.html
const wrapper = document.querySelector('.wrapper');

//--Create Div that will display new expense, then append to wrapper--//

//create an expense div
const newExpense = document.createElement('div')
//set class of expense div to newExpense
    // setting class allows me to pull it into CSS and HTML and manipulate
newExpense.classList.add('newExpense');
//set placeholder label as text node
newExpense.textContent = 'New Expense';
// append addBudget to parent div myBudget
wrapper.prepend(newExpense);


//--Create Div that will display total expenses, then append to wrapper--//

//create a total expenses div
const allExpense = document.createElement('div')
//set class of expense div to allExpense
allExpense.classList.add('allExpense');
//set placeholder label as text node
allExpense.textContent = 'Total Expenses';
// append addBudget to parent div myBudget
wrapper.prepend(allExpense);


//--Create Div that will display user income, then append to wrapper--//

// create an income div
const myIncome = document.createElement('div')
// set class of myIncome to myIncome
myIncome.classList.add('myIncome');
// set placeholder label as text node
myIncome.textContent = 'Income';
// append myIncome to wrapper
wrapper.prepend(myIncome);


//--Create Div that will display user budget balance, then append to wrapper--//

// create a div to display budget
const showBudget = document.createElement('div');
// set class list of showBudget div to myBudget
showBudget.classList.add('newBudget');
showBudget.setAttribute('type' , 'text');
// set placeholder label as text node
showBudget.textContent = 'Budget Balance';
// append addBudget to wrapper
wrapper.prepend(showBudget);



//--Create Div to show Expense items then append to wrapper--//
// -- this will need to be refined to actually pull in all the expense items

// create a div that will show all expenses
const showExpense = document.createElement('div');
// set class list of showBudget div to myBudget
showExpense.classList.add('showExpense');
// set placeholder label as text node
showExpense.textContent = 'Show All Expenses';
// append showExpense to wrapper
wrapper.prepend(showExpense);
