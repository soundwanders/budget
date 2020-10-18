//budget app.js

//get div budgetWrapper from index.html
const budgetWrapper = document.querySelector('.wrapper');

//--Create Divs for Budget Balance, Expenses, and Income--//
//create a div that will hold new expenses
const expenseContainer = document.createElement('div')
//create an input to add new expense
const inputExpense = document.createElement('INPUT');
//set class of div and input
    // setting class allows me to use it in CSS and HTML and manipulate
expenseContainer.classList.add('expenseContainer');
inputExpense.classList.add('inputExpense');
inputExpense.id = 'newExp'
//add text node. this WILL be BLANK, text is placeholder for now
expenseContainer.textContent = 'Add New Expense';
// append divs to parent div budgetWrapper
budgetWrapper.appendChild(expenseContainer);
budgetWrapper.appendChild(inputExpense);

// Total Expenses
//create a div that will show total expenses
const allExpensesContainer = document.createElement('div')
allExpensesContainer.classList.add('allExpensesContainer');
allExpensesContainer.textContent = 'Total Expenses';
budgetWrapper.appendChild(allExpensesContainer);

// Income
// create a div that will display income
const incomeContainer = document.createElement('div')
const setIncome = document.createElement('INPUT');
incomeContainer.classList.add('incomeContainer');
incomeContainer.textContent = 'Income here';
setIncome.classList.add('setIncome');
setIncome.id = 'newInc'
setIncome.setAttribute('type', 'text');
budgetWrapper.appendChild(incomeContainer);
budgetWrapper.appendChild(setIncome);


// Budget Balance
// create a div that will display budget
const budgetContainer = document.createElement('div');
budgetContainer.classList.add('budgetContainer');
budgetContainer.setAttribute('type' , 'text');
budgetContainer.textContent = 'Budget Balance';
budgetWrapper.appendChild(budgetContainer);


//-- Create Div to show Expense items then append to budgetWrapper --//
    // this will need to be refined to actually pull in all the expense items
const expenseList = document.createElement('div');
expenseList.classList.add('expenseList');
expenseList.textContent = 'Show All Expenses';
budgetWrapper.appendChild(expenseList);

////////////////////////////////////// 

function submitIncome() {
    newIncome = document.getElementById("newInc").value;
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';

    incomeContainer.append(newIncome);
};

function submitExpense() {
    newExpense = document.getElementById("newExp").value;
    expenseContainer.innerHTML = '';
    expenseContainer.textContent = '';

    expenseContainer.append(newExpense);
};
