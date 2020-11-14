//budget app.js

//get div budgetWrapper from index.html
const budgetWrapper = document.querySelector('.wrapper');

// regular expressions to check for numbers and special characters
// used in submit functions to validate input values
const regExNumbers = /^[0-9]|["0-9"] . +$/
const regExNonWords = /\W|_/

// Expense List Container
// create global expenseList to be called in functions
const expenseList = document.createElement('UL');
expenseList.classList.add('expenseList');
expenseList.setAttribute('id' , 'expenseUL');

budgetWrapper.appendChild(expenseList);

// Income Container
// create form to display income
const incomeContainer = document.createElement('form')
incomeContainer.classList.add('incomeContainer');
incomeContainer.textContent = 'Income';

// create input for user to set income
const setIncome = document.createElement('input');
setIncome.classList.add('inputs');
setIncome.id = 'myIncome';
setIncome.setAttribute('type', 'text');

budgetWrapper.appendChild(incomeContainer);
budgetWrapper.appendChild(setIncome);

// Budget Balance Container
// create a form that will display budget balance
const budgetContainer = document.createElement('form');
budgetContainer.classList.add('budgetContainer');
budgetContainer.setAttribute('type' , 'text');
budgetContainer.textContent = 'budget balance here';

budgetWrapper.appendChild(budgetContainer);

// Expense Name and Amount Inputs
// create input to add new expense name
const expenseName = document.createElement('input');
// create an input to add new expense $$ amount
const expenseAmount = document.createElement('input');
// set expenseName and expenseAmount class , id , type
expenseName.classList.add('inputs');
expenseName.id = 'expenseName';
expenseName.setAttribute('type', 'text');

expenseAmount.classList.add('inputs');
expenseAmount.id = 'expenseAmount';
expenseAmount.setAttribute('type', 'number');

budgetWrapper.appendChild(expenseName);
budgetWrapper.appendChild(expenseAmount);

// Expenses Total Amount Container
// create a container to hold total of all expenses,
// update whenever user appends new expense items to expenseList
totalContainer = document.createElement('div');

budgetWrapper.appendChild(totalContainer);
totalContainer.id = 'expenseTotal';

budgetWrapper.appendChild(expenseTotal);

//////////////////////////////////////

// SUBMIT INCOME Function
function submitIncome() {
    newIncome = document.getElementById('myIncome').value;

    if (newIncome == 0 || '') {
        alert("Income amount cannot be zero or empty");
        
    } else if (newIncome.match(regExNonWords)) {
        alert("Income amount must be a number");
            
    // if income's first value is 0 and next value is > 0,
    // then slice 0 and append rest as floating point number
    } else if (newIncome[0] == 0 && newIncome[1].match(regExNumbers)) {
        incomeContainer.innerHTML = '';
        incomeContainer.textContent = ''; 

        incomeContainer.append(expItemName);
        newIncome.slice[0];
        incomeContainer.append(parseFloat(newIncome));

    } else {
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';  
    incomeContainer.append(parseFloat(newIncome));
    console.log("Income submitted");

    // clear income input fields
    setIncome.value = '';
    setIncome.innerHTML = '';
    }
};

// SUBMIT EXPENSE ITEM Function
function submitExpense() {
    itemName = document.getElementById('expenseName').value;
    itemCost = document.getElementById('expenseAmount').value;

    // create list item element
    let li = document.createElement('li');

    // let the input value for new list items be expense item name and cost inputs
    let inputVal = itemCost + ' ' + itemName;
    let txt = document.createTextNode(inputVal);

    if (inputVal === '') {
      alert("You must input an expense");
    } else if (inputVal == 0 || '') {
        alert("Expense amount cannot be zero or empty");

    } else if (itemCost.match(regExNonWords)) {
        alert("Special characters not allowed");

    //  itemName match regExNumbers checks if itemName is a number
    } else if (itemName.match(regExNumbers)) {
        alert("Expense name cannot be a number");

    // if expense value first num is 0 and next value is > 0,
    // then slice 0, parseFloat and append remaining number
    } else if (itemCost[0] == 0 && itemCost[1].match(regExNumbers)) {
        itemCost.slice[0];
        parseFloat(itemCost);
        // add expense name and cost to list
        expenseList.appendChild(li);

        //clear expense input fields
        expenseName.value = '';
        expenseName.innerHTML = '';
        expenseAmount.value = '';
        expenseAmount.innerHTML = '';

    } else {
        // add expense name and cost to list
        li.appendChild(txt);
        console.log(txt);
        expenseList.appendChild(li);
        expenseName.value = '';
        expenseName.innerHTML = '';
        expenseAmount.value = '';
        expenseAmount.innerHTML = '';
    }

        // figure out how to keep a running total of expense costs on each submit
        function refreshTotal() {
            var amount = parseFloat(itemCost);
            if (totalContainer.innerText == '') {
                totalContainer.append(amount);
                console.log(amount);
                console.log("test");
            }
            else {
                const oldAmount = parseFloat(totalContainer.textContent);
                console.log(oldAmount);
                newAmount = (oldAmount + amount)

                totalContainer.innerHTML = '';
                totalContainer.append(newAmount);
                console.log(totalContainer);
                console.log("test2");       
        }
    }
        refreshTotal();
};

// CALCULATE USER BUDGET Function
function calculateBudget() {
    let userBalance = parseFloat(incomeContainer.value) - parseFloat(expenseTotal.value);
    budgetContainer.append(userBalance);
    console.log(userBalance);
};