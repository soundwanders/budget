//budget app.js

//get div budgetWrapper from index.html -- frames budget display
const budgetWrapper = document.querySelector('.wrapper');

// regular expressions to check for numbers, letters
// used in submit functions to validate user input values
regExNumbers = /^\d+$/;
regExLetters = /^[A-Z a-z]/;

// Income Container
// create div to display income
const incomeContainer = document.createElement('form')
    incomeContainer.id = 'incomeContainer';
    incomeContainer.textContent = '';


// Income Input Box
const setIncome = document.createElement('input');
    setIncome.classList.add('inputs');
    setIncome.id = 'incomeBox';
    setIncome.setAttribute('type', 'text');

budgetWrapper.appendChild(incomeContainer);
budgetWrapper.appendChild(setIncome);

// Budget Balance Container
// create a form that will display budget balance
const budgetContainer = document.createElement('form');
    budgetContainer.id = ('budgetContainer');
    budgetContainer.setAttribute('type' , 'text');
    budgetContainer.textContent = '';

budgetWrapper.appendChild(budgetContainer);

// Expense Name and Amount Input Boxes
const expenseName = document.createElement('input');
    expenseName.classList.add('inputs');
    expenseName.id = 'expenseName';
    expenseName.setAttribute('type', 'text');

budgetWrapper.appendChild(expenseName);

const expenseAmount = document.createElement('input');
    expenseAmount.classList.add('inputs');
    expenseAmount.id = 'expenseAmount';
    expenseAmount.setAttribute('type', 'text');

budgetWrapper.appendChild(expenseAmount);

// Expense List Container
// create global expenseList to be called in functions
const expenseList = document.createElement('UL');
    expenseList.setAttribute('id' , 'expenseL');

budgetWrapper.appendChild(expenseList);

// Expenses Total Amount Container
// create a container to hold total of all expenses ,
// then update whenever user adds a new expense item to expenseList
const totalContainer = document.createElement('div');
    totalContainer.id = 'totalContainer';

budgetWrapper.appendChild(totalContainer);

//////////////////////////////////////////////////

// SUBMIT INCOME Function
function submitIncome() {
    newIncome = document.getElementById('incomeBox').value;

    if (newIncome == 0 || '') {
        alert("Income amount cannot be zero or empty");
        return;
        
    } else if (newIncome.match(regExLetters)) {
        alert("Income amount must be a number");
        return;
            
    // if income's first value is 0 and next value is > 0,
    // then slice all 0 until value reads > 0
    } else if (newIncome[0] == 0 && newIncome[1].match(regExNumbers)) {
        incomeContainer.innerHTML = ' ';
        incomeContainer.textContent = ' '; 

        //incomeContainer.append(expItemName);
        newIncome.slice[0];
        incomeContainer.append(parseFloat(newIncome));

    } else {
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';
    monthlyIncome = ('$' + parseFloat(newIncome) + ' ' + '/ month');

    incomeContainer.append(monthlyIncome);
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
    // set new list items to be expense item name / cost inputs
    const inputVal = '$' + itemCost + ' ' + itemName;
    let txt = document.createTextNode(inputVal);

    if (!itemName.match(regExLetters)) {
        alert("Invalid. Expense name must not be empty and may only contain letters.");
            //clear expense input fields
            expenseName.value = '';
            expenseName.innerHTML = '';
            expenseAmount.value = '';
            expenseAmount.innerHTML = '';
            return;

    } else if (!itemCost.match(regExNumbers)) {
        alert("Expense cost must be all numbers and cannot be empty");
            //clear expense input fields
            expenseName.value = '';
            expenseName.innerHTML = '';
            expenseAmount.value = '';
            expenseAmount.innerHTML = '';
        return;

    // if expense value first num is 0 and next value is != 0 ,
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
            // REFRESH TOTAL Function
            // nested in SubmitExpense Function
            // running total of sum of all expense costs
        function refreshTotal() {
                let amount = parseFloat(itemCost);

            if (isNaN(amount)) {
                alert("Amount is not a number");
                return;
            
            } else if (totalContainer.innerText == '') {
                totalContainer.append(amount);
        
                console.log(totalContainer.innerText);
                console.log("test1");

            } else if (isNaN(totalContainer.innerText)) {
                alert ("Expense amount is not a number");
                totalContainer.innerHTML = '';
                totalContainer.text = ''
                return;

            } else {
                const oldAmount = parseFloat(totalContainer.innerText);
                console.log("V Previous Expense Total Amount below V");
                console.log(oldAmount);

                const newAmount = ('$' + ' ' + (oldAmount + amount));
                newAmount.id = 'expenseDisplay';
                console.log("V New Expense Total Amount below V");
                console.log(newAmount);

                totalContainer.innerHTML = '';
                totalContainer.append(newAmount);
                console.log("test2");     
            }
        }
        refreshTotal();
};

// CALCULATE USER BUDGET Function, needs work but the gist is ...
function calculateBudget() {
    const userBalance = incomeContainerValue - totalContainerValue; // convert both to numbers and subtract
    budgetContainer.innerText = '';  // clear old value
    budgetContainer.append(userBalance); //append new value
    console.log(userBalance);
};