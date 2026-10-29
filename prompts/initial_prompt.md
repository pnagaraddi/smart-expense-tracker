Role:
Act as an experienced Frontend Developer.

Context:
I am building a simple expense tracker for a learning assignment.
This is a new project using HTML, CSS, and plain JavaScript.
I want to understand the code as we build it.

Task:
First, divide the application into small steps:
1. HTML structure.
2. CSS styling.
3. JavaScript functionality.
4. Manual testing and review.

The finished application must:
- Add an expense with a name, amount, and category.
- Display all entered expenses.
- Show the total amount spent.
- Allow deletion of individual expenses.
- Show clear messages for invalid inputs.

Constraints:
Use index.html, style.css, and script.js.
No frameworks, dependencies, backend, database, or login.
Data may reset on refresh.
Keep the code readable and beginner-friendly.
Reject empty or whitespace-only names and amounts that
are missing, nonnumeric, zero, or negative.
Display expense names as text, not executable HTML.
Use USD and display amounts to two decimal places.
Do not implement everything at once.

Examples:
- Add Lunch, 12.50, Food: show the expense and total $12.50.
- Add Bus, 3.00, Travel: total becomes $15.50.
- Delete Lunch: total becomes $3.00.
- Submit an empty name or amount -5: show an error,
  add nothing, and preserve the total.

Output Format:
Give a short development plan first.
Then create only index.html, with labeled form fields,
a category dropdown, an error-message area, an expense
list area, and a total initially showing $0.00.
Include references to the future CSS and JavaScript files.
Explain the HTML structure briefly, then stop.

Success Criteria:
The plan covers all requirements.
The HTML opens in a browser and contains the required elements.
CSS and JavaScript implementation wait for later prompts.
Clearly identify what is not functional or tested yet.