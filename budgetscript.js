//budget app.js

//get div budgetWrapper from index.html
const budgetWrapper = document.querySelector('.wrapper');

// create global expenseList to be called in functions
let expenseList = document.createElement('UL');
expenseList.classList.add('myExpList');
expenseList.setAttribute('id' , 'expenseUL');
// run generateList on page load
window.onload = generateList();

//--Create Inputs for Expenses and Income--//

// Expense Inputs
//create input to add new expense name
const expenseName = document.createElement('input');
//create an input to add new expense $$ amount
const inputExpense = document.createElement('input');
// set expenseName class , id , type
expenseName.classList.add('inputs');
expenseName.id = 'expName';
expenseName.setAttribute('type', 'text');
//set inputExpense class , id , type
inputExpense.classList.add('inputs');
inputExpense.id = 'newExp';
inputExpense.setAttribute('type', 'text');

// append inputs to parent userExpenses
budgetWrapper.appendChild(expenseName);
budgetWrapper.appendChild(inputExpense);

// Income
// create form to display income
const incomeContainer = document.createElement('form')
//create input for user to set income
const setIncome = document.createElement('input');
incomeContainer.classList.add('incomeContainer');
incomeContainer.textContent = 'Income';
setIncome.classList.add('inputs');
setIncome.id = 'newInc';
setIncome.setAttribute('type', 'text');

budgetWrapper.appendChild(incomeContainer);
budgetWrapper.appendChild(setIncome);

// Budget Balance
// create a form that will display budget
const budgetContainer = document.createElement('form');
budgetContainer.classList.add('budgetContainer');
budgetContainer.setAttribute('type' , 'text');
budgetContainer.textContent = 'Budget Balance';

budgetWrapper.appendChild(budgetContainer);
// reg exp is used in submit functions to check if input is a number between 0-9
const regEx = /^[0-9]+$/;

////////////////////////////////////// 

// GENERATE EXPENSE LIST Function
//create a function to generate a list that will hold expense items
function generateList() {

    itemList = ['test'];
    document.getElementById('expenseUL').appendChild(expenseList);
    itemList.forEach(renderList);

    function renderList(element, index, arr) {
        let li = document.createElement('li');
        li.setAttribute('class','item');
        expenseList.appendChild(li);
        li.innerHTML = li.innerHTML + element;
    }

    budgetWrapper.appendChild(expenseList);
};

// SUBMIT INCOME Function
function submitIncome() {
    newIncome = document.getElementById('newInc').value;

    if (newIncome == 0 || '') {
        alert("Income amount cannot be zero or empty");
        
    } else if (!newIncome.match(regEx)) {
        alert("Income amount must be a number");
// if income's first value is 0 and next value is > 0,
// then slice 0 and append rest as floating point number
    } else if (newIncome[0] == 0 && newIncome[1].match(regEx)) {
        incomeContainer.innerHTML = '';
        incomeContainer.textContent = ''; 

        incomeContainer.append(expItemName);
        newIncome.slice[0];
        incomeContainer.append(parseFloat(newIncome));

    } else {
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';  
    incomeContainer.append(parseFloat(newIncome));

    //clear income input fields
    setIncome.value = '';
    setIncome.innerHTML = '';
    }
};

// SUBMIT EXPENSE ITEM Function
function submitExpense() {
    expItemName = document.getElementById('expName').value;
    newExpense = document.getElementById('newExp').value;

 if (newExpense == 0 || '') {
        alert("Expense amount cannot be zero or empty");
    } else if (!newExpense.match(regEx)) {
        alert("Expense amount must be a number");

// if expense number's first value is 0 and next value is > 0,
// slice 0, then parseFloat and append the rest
    } else if (newExpense[0] == 0 && newExpense[1].match(regEx)) {
        newExpense.slice[0];

        expenseList.append(expItemName + ' ' + parseFloat(newExpense));

        //clear expense input fields
        expenseName.value = '';
        expenseName.innerHTML = '';
        inputExpense.value = '';
        inputExpense.innerHTML = '';

    } else {
        expenseList.append(expItemName + ' ' + parseFloat(newExpense));

        //clear expense input fields
        expenseName.value = '';
        expenseName.innerHTML = '';
        inputExpense.value = '';
        inputExpense.innerHTML = '';
    }
};

