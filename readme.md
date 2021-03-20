#Monthly Budget Calculator <br> <br>

<h2>Project Development</h2>
The user is able to input their monthly income, create a list of expenses and calculate their remaining budget.
<br>
Each input container holds user input and appends the data to the appropriate container using the Submit buttons.<br>
The monthly income is a local variable that consists of the user input, plus text labels to create a more readable display. <br>

Example: User inputs 5000 for monthly income, the page displays $5000 / month. <br>
The expense list is an unordered list that holds all expenses. Two input containers, expense cost and expense name, are combined into one variable and then appended to the list.

<br><br><br>

Regular expressions are used to check all user inputs for correct values. The submit functions use boolean checks to run the values against the regular expression requirements.<br>
All income submissions must contain only numbers and the expense item names must contain only texts. Spaces are allowed in the expense name field for instances such as "Dunkin Donuts"

<br><br><br>

The budget is calculated by subtracting the expense total costs from the monthly income. Called substring(1) of the user's monthly income to eliminate the dollar sign at the beginning of the string ($5000 / month). After removing the dollar sign, the string can successfully be parsed as an integer without encountering error, because the dollar sign is not an integer and cannot be parsed.

<br><br>

User is able to save data in their browser using local storage. JSON used to stringify and parse the budget data.
<br>
List elements, when being loaded from local storage, were parsed as either plain-text strings or strings that displayed the HTML tags and did not maintain CSS style. 
<br>
To solve the problem, I created a list item variable that is an empty 'li', this variable is separate from the user's local storage data that is being parsed when Loading. I then assigned the loaded string's class as 'li' so it is stylized like the other 'li' class items. After re-creating the loaded string as a list item so it can be assigned the appropriate tags for CSS styling, the innerHTML of the empty list item variable is assigned to be the value of the data loaded from local storage.
<br>
Basically, by recreating each list item and setting its value and class to be the same as the other list items, the list items could be recognized as a list item with class 'li' in the CSS stylesheet and then formatted the same as all of the other list items.
<br>
<br>
<br>
There are no servers or databases involved in this project. It is all run through Localhost and hosted on Github Pages as a static web app.
<br>
<br>

<a href = "https://soundwanders.github.io/budget/">Visit Budget App</a>