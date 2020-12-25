// budgetscript.js

// get div budgetWrapper, which acts as a canvas for UI design elements
const budgetWrapper = document.querySelector('.budgetWrap');

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
setIncome.title = 'Enter monthly income here';

budgetWrapper.appendChild(incomeContainer);
budgetWrapper.appendChild(setIncome);

// Budget Balance Container
// create a div that will display user's budget
const budgetContainer = document.createElement('div');
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
expenseName.title = 'Enter expense name here';

budgetWrapper.appendChild(expenseName);

const expenseAmount = document.createElement('input');
expenseAmount.classList.add('inputs');
expenseAmount.id = 'expenseAmount';
expenseAmount.setAttribute('type', 'text');
expenseAmount.title = 'Enter expense cost here';

budgetWrapper.appendChild(expenseAmount);

// Expenses Total Amount Container
const totalContainer = document.createElement('div');
totalContainer.id = 'totalContainer';
totalContainer.title = 'Displays total expense costs';

budgetWrapper.appendChild(totalContainer);

// Expense List Container
// create global expenseList to be called in functions
const expenseList = document.createElement('UL');
expenseList.setAttribute('id', 'expenseUL');
expenseList.title = 'Expense List';

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
  newIncome.classList = 'newIncome';
  const monthlyIncome = ('$' + newIncome + '/month');

  if (newIncome == 0 || '') {
    alert('Income amount cannot be zero or empty');
  
  } else if (!newIncome.match(regExNumbers)) {
    alert('Income amount must be a number');
    
    // if income's first value is 0 and next value is > 0,
    // then slice all 0 until value reads > 0
  } else if (newIncome[0] = 0 && newIncome[1].match(regExNumbers)) {
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';
    newIncome.replaceAll(/^0+/g, '');
    incomeContainer.append(monthlyIncome);
    console.log('Income submitted');

    // else if itemCost begins or ends with a 'space' ,
    // then slice all white space , parseFloat and append income
  } else if (newIncome[0] == ' ' && newIncome[1].match(regExNumbers)) {
    incomeContainer.innerHTML = '';
    incomeContainer.textContent = '';
    parseFloat(newIncome);
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
  li.classList = 'li';

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

    // if expense value first num is 0 and next value is a number != 0
    // parseInt itemCost with radix of 10 to remove all zeroes at start of string
  } else if (itemCost[0] == 0 && itemCost[1].match(regExNumbers)) {
    var x = ("$" + parseInt(itemCost, 10));
    //parseFloat(itemCost);
    li.append(x);
    expenseList.appendChild(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';

    // else if itemCost begins with a space and next value is a number
    // use regular expression to remove all white space.
    // assigned as global so it searches entire string
    // instead of stopping after first white space is returned
  } else if (itemCost[0] == ' ') {
    itemCost.replace(/' '/g , '');
    parseFloat(itemCost);
    expenseList.appendChild(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';

  } else if (!itemCost.match(regExNumbers)) {
    alert('Expense cost must be all numbers and cannot be empty');
    // clear expense input fields
    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';
    return;

  } else {
    li.appendChild(txt);
    expenseList.appendChild(li);

    expenseName.value = '';
    expenseName.innerHTML = '';
    expenseAmount.value = '';
    expenseAmount.innerHTML = '';
  }

  // REFRESH TOTAL Function
  // nested within SubmitExpense Function
  // keeps a running total of sum of all expense costs
  function refreshTotal () {
    const amount = (parseFloat(itemCost));
    amount.id = 'expenseCost';

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
  income = incomeContainer.innerHTML.substr(1);
  newIncome = parseFloat(income);

  if (isNaN(newIncome)) {
    console.log(newIncome);
    income = '';

  } else {
    total = parseFloat(totalContainer.innerHTML.substr(1));
    console.log(total);

    const newBudget = (newIncome - total);
    budgetContainer.innerHTML = ''; // clear old value
    budgetContainer.append(newBudget); // append new value
    budgetContainer.prepend("$");
    console.log(newBudget);
  }
};

// DELETE EXPENSE Function
function deleteExpense () {
  const liSelect = document.getElementsByClassName('selected');
  while (liSelect.length > 0) liSelect[0].remove();
};

// CLEAR EXPENSE TOTAL AMOUNT Function
function clearTotalAmount () {
  totalContainer.innerHTML = '';
  console.log("Expense total amount has been reset");
};

// LOCAL STORAGE , SAVE AND LOAD USER DATA
// Save User Data
function saveData () {
  // income
  localStorage.setItem('income' , JSON.stringify(incomeContainer.innerText));

  // budget
  localStorage.setItem('budget', JSON.stringify(budgetContainer.innerText));

  // expense total
  localStorage.setItem('expenseTotal', JSON.stringify(totalContainer.innerText));

  // list items
  localStorage.setItem('list' , JSON.stringify(expenseList.innerHTML));
};

// Load User Data
function getData() {
  
  if (typeof (Storage)!== void(0)) {

    // income
    const getIncome = JSON.parse(localStorage.getItem('income'));
    incomeContainer.innerHTML = '';
    incomeContainer.innerText = '';
    incomeContainer.append(getIncome);

    // budget
    const getBudget = JSON.parse(localStorage.getItem('budget'));
    budgetContainer.innerHTML = '';
    budgetContainer.innerText = '';
    budgetContainer.append(getBudget);

    // expense total
    const getExpenseTotal = JSON.parse(localStorage.getItem('expenseTotal'));
    totalContainer.innerHTML = '';
    totalContainer.append(getExpenseTotal);

    // list items
    const makeLi = document.createElement('li');
    var getList = JSON.parse(localStorage.getItem('list'));
    getList.classList = 'li';
    makeLi.innerHTML = getList;
        
    expenseList.innerHTML = '';
    expenseList.append(makeLi);

  } else {
    alert("Unable to save data to localStorage");
  }
};
