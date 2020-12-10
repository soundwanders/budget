// budgetscript.js

// get div budgetWrapper, which acts as a canvas for UI design elements
const budgetWrapper = document.querySelector('.wrapper');

// regular expressions to check for numbers, letters
// used in 'submit' functions to validate input values before appending
regExNumbers = /^\d+$/;
regExLetters = /^[A-Z ' a-z]+$/;

// Income Container
// create div to display income
const incomeContainer = document.createElement('div');
incomeContainer.id = 'incomeContainer';
incomeContainer.setAttribute('type', 'text');
incomeContainer.textContent = '';
incomeContainer.title = 'Displays monthly income';

// Income Input Box
const setIncome = document.createElement('input');
setIncome.classList.add('inputs');
setIncome.id = 'incomeBox';
setIncome.setAttribute('type', 'text');
setIncome.title = 'Monthly income goes here!';

budgetWrapper.appendChild(incomeContainer);
budgetWrapper.appendChild(setIncome);

// Budget Balance Container
// create a form that will display user's budget
const budgetContainer = document.createElement('form');
budgetContainer.id = ('budgetContainer');
budgetContainer.setAttribute('type', 'text');
budgetContainer.textContent = '';
budgetContainer.title = 'Displays monthly budget';

budgetWrapper.appendChild(budgetContainer);

// Expense Name and Amount Input Boxes
const expenseName = document.createElement('input');
expenseName.classList.add('inputs');
expenseName.id = 'expenseName';
expenseName.setAttribute('type', 'text');
expenseName.title = 'Expense name goes here!';

budgetWrapper.appendChild(expenseName);

const expenseAmount = document.createElement('input');
expenseAmount.classList.add('inputs');
expenseAmount.id = 'expenseAmount';
expenseAmount.setAttribute('type', 'text');
expenseAmount.title = 'Expense cost goes here!';

budgetWrapper.appendChild(expenseAmount);

// Expense List Container
// create global expenseList to be called in functions
const expenseList = document.createElement('UL');
expenseList.setAttribute('id', 'expenseUL');
expenseList.title = 'List of Expenses';

budgetWrapper.appendChild(expenseList);

// Expenses Total Amount Container
const totalContainer = document.createElement('div');
totalContainer.id = 'totalContainer';
totalContainer.title = 'DIsplays total expense costs';

budgetWrapper.appendChild(totalContainer);

// Add class 'Selected' to list items when clicked
const getList = document.querySelector('UL');
getList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('selected');
  }
}, false);

/// ///////////////////////////////////////////////

// SUBMIT INCOME Function
function submitIncome () {
  newIncome = document.getElementById('incomeBox').value;
  newIncome.id = 'newIncome';

  if (newIncome == 0 || '') {
    alert('Income amount cannot be zero or empty');
  } else if (newIncome.match(regExLetters)) {
    alert('Income amount must be a number');

    // if income's first value is 0 and next value is > 0,
    // then slice all 0 until value reads > 0
  } else if (newIncome[0] == 0 && newIncome[1].match(regExNumbers)) {
    incomeContainer.innerHTML = ' ';
    incomeContainer.textContent = ' ';
    incomeContainer.append(parseFloat(newIncome));

    // else if itemCost begins with a space and next value is a number ,
    // then slice all spaces, parseFloat and append income
  } else if (newIncome[0] == ' ' && newIncome[1].match(regExNumbers)) {
    incomeContainer.innerHTML = ' ';
    incomeContainer.textContent = ' ';

    newIncome.slice[0];
    incomeContainer.append(parseFloat(newIncome));

  } else {
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';
    monthlyIncome = ('$' + parseFloat(newIncome) + ' ' + '/ month');

    incomeContainer.append(monthlyIncome);
    console.log('Income submitted');

    // clear income input fields
    setIncome.value = '';
    setIncome.innerHTML = '';
  }
};

// SUBMIT EXPENSE ITEM Function
function submitExpense () {
  itemName = document.getElementById('expenseName').value;
  itemCost = document.getElementById('expenseAmount').value;

  // create list item element
  const li = document.createElement('li');
  // set new list items to be expense item name / cost inputs
  const inputVal = ('$' + itemCost + ' ' + itemName);
  const txt = document.createTextNode(inputVal);

  if (!itemName.match(regExLetters)) {
    alert('Invalid. Expense name must not be empty and may only contain letters.');
    // clear expense input fields
    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';
    return;

  } else if (!itemCost.match(regExNumbers)) {
    alert('Expense cost must be all numbers and cannot be empty');
    // clear expense input fields
    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';
    return;

    // if expense value first num is 0 and next value is != 0 ,
    // then slice 0, parseFloat cost and append to list
  } else if (itemCost[0] == 0 && itemCost[1].match(regExNumbers)) {
    itemCost.slice[0];
    parseFloat(itemCost);
    expenseList.appendChild(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';

    // else if itemCost begins with a space and next value is a number ,
    // then slice all spaces, parseFloat cost and append to list
  } else if (itemCost[0] == ' ' && itemCost[1].match(regExNumbers)) {
    itemCost.slice[0];
    parseFloat(itemCost);
    expenseList.appendChild(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';

  } else {
    li.appendChild(txt);
    expenseList.appendChild(li);
    console.log(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';
  }

  // REFRESH TOTAL Function
  // nested in SubmitExpense Function
  // running total of sum of all expense costs
  function refreshTotal () {
    const amount = (parseFloat(itemCost));

    if (isNaN(amount)) {
      alert('Amount is not a number');
    } else if (totalContainer.innerText == '') {
      totalContainer.append(amount);

      console.log(totalContainer.innerText);
      console.log('Expense Total Updated');

    } else if (isNaN(totalContainer.innerText)) {
      alert('Expense amount is not a number');
      totalContainer.innerHTML = '';
      totalContainer.text = '';

    } else {
      const oldAmount = parseFloat(totalContainer.innerText);
      console.log('V - Previous Expense Total Amount Blow');
      console.log(oldAmount);

      const newAmount = (oldAmount + amount);
      newAmount.id = 'expenseDisplay';
      console.log('V - Updated Expense Total Amount Below');
      console.log(newAmount);

      totalContainer.innerHTML = '';
      totalContainer.append(newAmount);
      console.log('Expense Total Updated');
    }
  }
  refreshTotal();
};

// CALCULATE USER BUDGET Function
function calculateBudget () {
  income = incomeContainer.innerHTML;
  income.slice[1];
  parseFloat(income);

  total = totalContainer.innerText;
  parseFloat(total);

  newTotal = ('$' + (income - total));

  const userBalance = (newTotal);
  budgetContainer.innerText = ''; // clear old value
  budgetContainer.append(userBalance); // append new value
  console.log(userBalance);
};

// DELETE EXPENSE Function
function deleteExpense () {
  const liSelect = document.getElementsByClassName('selected');
  while (liSelect.length > 0) liSelect[0].remove();
};

function clearTotalAmount () {
  totalContainer.innerHTML = '';
};

// LOCAL STORAGE -- work in progress

// Save User Data
function saveData () {
  // income
  localStorage.setItem('income' , incomeContainer.innerHTML);
  var saveIncome = localStorage.getItem('income');
  console.log(saveIncome);

  // budget
  localStorage.setItem('budget', budgetContainer.innerHTML);
  var saveBudget = localStorage.getItem('budget');
  console.log(saveBudget);

  // expense total
  localStorage.setItem('expenseTotal', totalContainer.innerHTML);
  var saveTotal = localStorage.getItem('expenseTotal');
  saveTotal.id = 'newIncome';
  console.log(saveTotal);
}


// Load User Data
function getData() {
  // income
  var newIncome = localStorage.getItem('income');
  incomeContainer.append(newIncome);

  // budget
  var getBudget = localStorage.getItem('budget');
  budgetContainer.append(getBudget);

  // expense total
  var getExpenseTotal = localStorage.getItem('expenseTotal');
  totalContainer.append(getExpenseTotal);
}