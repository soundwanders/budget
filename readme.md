## Simple Monthly Budget Calculator

- The user is able to input their monthly income, create a list of expenses and calculate their remaining budget.
- Each input container holds user input and appends the data to the appropriate container using the Submit buttons.
- The monthly income is a local variable that consists of the user input, plus text labels to create a more readable display.
    - Example: User inputs 5000 for monthly income, the page displays $5000 / month.
- The expense list is an unordered list that holds all expenses.
    - Two input containers, expense cost and expense name, are combined into one variable and then appended to the list.
- Regular expressions are used to check all user inputs for correct values. The submit functions use boolean checks to run the values against the regular expression requirements.
- All income submissions must contain only numbers and the expense item names must contain only texts.
    - Spaces are allowed in the expense name field for instances such as "Dunkin Donuts"
- The budget is calculated by subtracting the expense total costs from the monthly income.
- User is able to save data in their browser using local storage. JSON used to stringify and parse the budget data.
- There are no servers or databases involved in this project because Github Pages only supports static content. It is all run through Localhost using Javascript's localStorage to sava data in the browser.
____________________________________________________________________________________________________________________________________________
- **Obstacle**:
    - Unable to parse the income as an integer because of the dollar sign in the beginning, leading to NaN error.
- **Solution**:
    - Called substring(1) of the user's monthly income to eliminate the dollar sign at the beginning of the string ($5000 / month).
    - After removing the dollar sign, the string can successfully be parsed as an integer without returning NaN.
- **Obstacle:**
    - List elements, when being loaded from local storage using JSON, were being parsed as plain-text strings that did not maintain CSS style because it was not processed as a DOM list item (li) object.
- **Solution:**
    - I created an unassigned list item variable that is a placeholder DOM li object. This variable is separate from the stored JSON data that was causing the problem.
    - Assigned the empty list item's class to match the list item styling so that it was recognized as a list item and styled correctly.
    - Appended the inner HTML of the saved list items (plain-text, not styled) into the new list item variables with class 'li', completing the process of re-creating the list item so that it is able to be recognized as DOM list item rather than loaded as a style-less string.

<a href = "https://soundwanders.github.io/budget/"></a>
