//budget app.js

//get div budgetWrapper from index.html
const budgetWrapper = document.querySelector('.wrapper');

// create global expenseList to be called in functions
var expenseList = document.createElement('UL');
expenseList.classList.add('myExpList');
expenseList.setAttribute('id' , 'expenseUL');
// run generateList on page load
window.onload = generateList();

//--Create Inputs for Expenses and Income--//

// Expense Inputs
//create input to add new expense name
const expenseName = document.createElement('input');
//create an input to add new expense $$ amount
const expenseAmount = document.createElement('input');
// set expenseName class , id , type
expenseName.classList.add('inputs');
expenseName.id = 'expName';
expenseName.setAttribute('type', 'text');
//setexpenseAmount class , id , type
expenseAmount.classList.add('inputs');
expenseAmount.id = 'addExp';
expenseAmount.setAttribute('type', 'text');

// append inputs to parent userExpenses
budgetWrapper.appendChild(expenseName);
budgetWrapper.appendChild(expenseAmount);

// Income
// create form to display income
const incomeContainer = document.createElement('form')
//create input for user to set income
const setIncome = document.createElement('input');
incomeContainer.classList.add('incomeContainer');
incomeContainer.textContent = 'Income';
setIncome.classList.add('inputs');
setIncome.id = 'myIncome';
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
var regEx = /^[0-9]+$/;

////////////////////////////////////// 

// GENERATE EXPENSE LIST Function
//create a function to generate a list that will hold expense items
function generateList() {
    itemList = ['test'];
    document.getElementById('expenseUL').appendChild(expenseList);
    }

    budgetWrapper.appendChild(expenseList);


// SUBMIT INCOME Function
function submitIncome() {
    newIncome = document.getElementById('myIncome').value;

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
    itemName = document.getElementById('expName').value;
    itemCost = document.getElementById('addExp').value;

    let li = document.createElement('li');
    let inputVal = itemName + ' ' + itemCost;
    let txt = document.createTextNode(inputVal);

    li.appendChild(txt);

    if (inputVal === '') {
      alert("You must input an expense");
    } else if (inputVal == 0 || '') {
        alert("Expense amount cannot be zero or empty");
        //  itemName match regEx checks if itemName is a number
    } else if (!itemCost.match(regEx)) {
        alert("Expense amount must be a number");
    } else if (itemName.match(regEx)) {
            alert("Expense name cannot be a number");
    // if expense value first num is 0 and next value is > 0,
    // then slice 0, parseFloat and append remaining number
    } else if (itemCost[0] == 0 && itemCost[1].match(regEx)) {
        itemCost.slice[0];

        expenseList.append(itemName + ' ' + parseFloat(itemCost));

        //clear expense input fields
        itemName.value = '';
        itemName.innerHTML = '';
        itemCost.value = '';
        itemCost.innerHTML = '';

    } else {
        document.getElementById('expenseUL').appendChild(li);
        }
        itemName.value = '';
        itemName.innerHTML = '';
        itemCost.value = '';
        itemCost.innerHTML = '';
};