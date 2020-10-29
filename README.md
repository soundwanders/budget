Javascript Mock Budget Calculator Project
A simple budget calculator that allows user to set their income, create a list of expenses with names & dollar amounts,
and a visual display of the budget's "balance." The balance is a result of the total expense amount subtracted from the user's income.


10/2020 problem: Need to find a way to append list items to expense list
// solution: create a function > create list item element 'li' > combine user inputs for expense name and cost into one 'inputValue' > create text node with a value of user inputs > append 'inputValue' to li, making the inputValue a list item > append list item to parent div budgetWrapper for onscreen display

10/2020 problem: Add list items together and display in total expense container. Need to pull in only the expense amount,
but the list items value is expense name and cost combined into one li

10/2020 problem: While succeeding in rejecting any user input for income or expense that are not appropriate, i.e. text instead of numbers
in the expense amount input, realized I need to find a way to add decimal places and commas.
How can I manipulate the output to display in "currency" format