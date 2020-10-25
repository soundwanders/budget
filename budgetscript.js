//budget app.js

//get div budgetWrapper from index.html
const budgetWrapper = document.querySelector('.wrapper');

//--Create Forms and Inputs for Budget, Expenses, Income--//

//Expenses
//create a list that will hold expenses
const expenseContainer = document.createElement('UL');
expenseContainer.classList.add('expenseList');
expenseContainer.setAttribute("id", "expenseUL");
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

//add text node to expenseContainer...think about what to do with this
expenseContainer.textContent = 'Add New Expense';

// append div and inputs to parent budgetWrapper
budgetWrapper.appendChild(expenseContainer);
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
var regEx = /^[0-9]+$/;

////////////////////////////////////// 

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

// SUBMIT EXPENSE AMOUNT and NAME Function
function submitExpense() {
    newExpense = document.getElementById('newExp').value;
    expItemName = document.getElementById('expName').value;

 if (newExpense == 0 || '') {
        alert("Expense amount cannot be zero or empty");
    } else if (!newExpense.match(regEx)) {
        alert("Expense amount must be a number");
// if expense number's first value is 0 and next value is > 0,
// slice 0, then parseFloat and append the rest
    } else if (newExpense[0] == 0 && newExpense[1].match(regEx)) {
        expenseContainer.innerHTML = '';
        expenseContainer.textContent = ''; 
        expenseContainer.append(expItemName);
        newExpense.slice[0];
        expenseContainer.append(' ' + parseFloat(newExpense));

        //clear expense input fields
        expenseName.value = '';
        expenseName.innerHTML = '';
        inputExpense.value = '';
        inputExpense.innerHTML = '';

    } else {
    expenseContainer.innerHTML = '';
    expenseContainer.textContent = '';  

    expenseContainer.append(expItemName);
    expenseContainer.append(' ' + parseFloat(newExpense));

    expenseName.value = '';
    expenseName.innerHTML = '';
    inputExpense.value = '';
    inputExpense.innerHTML = '';
    }
};

