// budgetscript.js

// get div budgetWrapper, which acts as a canvas for UI design elements
const budgetWrapper = document.querySelector('.budgetWrapper');

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

// Expenses Total Amount Container
const totalContainer = document.createElement('div');
totalContainer.id = 'totalContainer';
totalContainer.title = 'DIsplays total expense costs';

budgetWrapper.appendChild(totalContainer);

// Expense List Container
// create global expenseList to be called in functions
const expenseList = document.createElement('UL');
expenseList.setAttribute('id', 'expenseUL');
expenseList.title = 'List of Expenses';

budgetWrapper.appendChild(expenseList);

// Add class 'Selected' to list items when clicked
const getList = document.querySelector('UL');
getList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('selected');
  }
}, false);

//////// FUNCTIONS ////////

// SUBMIT INCOME Function
function submitIncome () {
  newIncome = document.getElementById('incomeBox').value;
  newIncome.id = 'newIncome';
  monthlyIncome = ('$' + newIncome + '/month');

  if (newIncome == 0 || '') {
    alert('Income amount cannot be zero or empty');

  } else if (!newIncome.match(regExNumbers)) {
    alert('Income amount must be a number');

    // if income's first value is 0 and next value is > 0,
    // then slice all 0 until value reads > 0
  } else if (!newIncome[0] == 0 && newIncome[1].match(regExLetters)) {
    incomeContainer.innerHTML = ' ';
    incomeContainer.textContent = ' ';
    incomeContainer.append(monthlyIncome);
    console.log('Income submitted');

    // else if itemCost begins or ends with a 'space' ,
    // then slice all white space , parseInt and append income
  } else if (!newIncome[0] == ' ' && newIncome[1].match(regExLetters)) {
    incomeContainer.innerHTML = ' ';
    incomeContainer.textContent = ' ';
    newIncome.slice[0];
    incomeContainer.append(monthlyIncome);
    console.log('Income submitted');

  } else {
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';
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
    // then slice 0, parseInt cost and append to list
  } else if (itemCost[0] == 0 && itemCost[1].match(regExNumbers)) {
    itemCost.slice[0];
    parseInt(itemCost);
    expenseList.appendChild(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';

    // else if itemCost begins with a space and next value is a number ,
    // then slice all spaces, parseInt cost and append to list
  } else if (itemCost[0] == ' ' && itemCost[1].match(regExNumbers)) {
    itemCost.slice[0];
    parseInt(itemCost);
    expenseList.appendChild(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';

  } else {
    li.appendChild(txt);
    expenseList.appendChild(li);
    console.log(li.txt);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';
  }

  // REFRESH TOTAL Function
  // nested within SubmitExpense Function
  // running total of sum of all expense costs
  function refreshTotal () {
    const amount = (parseInt(itemCost));

    if (isNaN(amount)) {
      alert('Amount is not a number');
    } else if (totalContainer.innerText == '') {
      totalContainer.append(amount);
      totalContainer.prepend('$');
      console.log(totalContainer.innerText);
      console.log('Expense Total Updated');

    } else if (isNaN(totalContainer.innerText)) {
      alert('Expense amount is not a number');
      totalContainer.innerHTML = '';
      totalContainer.text = '';

    } else {
      const oldAmount = parseInt(totalContainer.innerText);
      console.log('V - Previous Expense Total Amount Blow');
      console.log(oldAmount);

      const newAmount = (oldAmount + amount);
      newAmount.id = 'expenseDisplay';
      console.log('V - Updated Expense Total Amount Below');
      console.log(newAmount);

      totalContainer.innerHTML = '';
      totalContainer.append(newAmount);
      totalContainer.prepend('$');
      console.log(newAmount);
      console.log('Expense Total Updated');
    }
  }
  refreshTotal();
};

// CALCULATE USER BUDGET Function
function calculateBudget () {
  income = incomeContainer.innerHTML.substring(1);
  newIncome = parseInt(income);
  console.log(newIncome);

  total = parseInt(totalContainer.innerHTML.substring(1));
  console.log(total);

  const newTotal = (newIncome - total);
  newTotal.id = 'budgetBalance';
  budgetContainer.innerHTML = ''; // clear old value
  budgetContainer.append(newTotal); // append new value
  budgetContainer.prepend("$");
  console.log(newTotal);
};

// DELETE EXPENSE Function
function deleteExpense () {
  const liSelect = document.getElementsByClassName('selected');
  while (liSelect.length > 0) liSelect[0].remove();
};

function clearTotalAmount () {
  totalContainer.innerHTML = '';
  console.log("Expense total amount has been reset");
};

// LOCAL STORAGE , SAVE AND LOAD USER DATA
// Save User Data
function saveData () {
  // income
  localStorage.setItem('income' , incomeContainer.innerHTML);

  // budget
  localStorage.setItem('budget', budgetContainer.innerHTML);

  // expense total
  localStorage.setItem('expenseTotal', totalContainer.innerHTML);

  // list items
  localStorage.setItem('list' , expenseList.textContent);
};

// Load User Data
function getData() {
  // income
  const getIncome = localStorage.getItem('income');
  getIncome.id = 'newIncome';
  incomeContainer.innerHTML = '';
  incomeContainer.append(getIncome);

  // budget
  const getBudget = localStorage.getItem('budget');
  budgetContainer.innerHTML = '';
  budgetContainer.append(getBudget);

  // expense total
  const getExpenseTotal = localStorage.getItem('expenseTotal');
  getExpenseTotal.id = 'newTotal';
  totalContainer.innerHTML = '';
  totalContainer.append(getExpenseTotal);

  // list items
  const getList = localStorage.getItem('list');
  getList.className = 'li';
  expenseList.innerText = '';
  expenseList.append(getList);
};