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
- The budget is calculated by subtracting the expense total costs from the monthly income. Called substring(1) of the user's monthly income to eliminate the dollar sign at the beginning of the string ($5000 / month).
    - After removing the dollar sign, the string can successfully be parsed as an integer without encountering error, because the dollar sign is not an integer and cannot be parsed.
- User is able to save data in their browser using local storage. JSON used to stringify and parse the budget data.
- List elements, when being loaded from local storage, were parsed as either plain-text strings or strings that displayed the HTML tags and did not maintain CSS style. 
    - To solve the problem, I created a list item variable that is an empty 'li', this variable is separate from the user's local storage data that is being parsed when Loading. I then assigned the loaded string's class as 'li' so it is stylized like the other 'li' class items. 
    - By recycling the inner HTML of the saved list items into a new list item with proper class, the list items could be recognized as a list item with class 'li' within the CSS stylesheet and then formatted the same as all of the other list items.
- There are no servers or databases involved in this project. It is all run through Localhost and the content is static because it is hosted by Github Pages

<a href = "https://soundwanders.github.io/budget/"></a>
