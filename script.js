const form = document.getElementById("expense-form");
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const errorMessage = document.getElementById("error-message");
const expenseList = document.getElementById("expense-list");
const emptyMessage = document.getElementById("empty-message");
const totalAmount = document.getElementById("total-amount");

const allowedCategories = Array.from(categoryInput.options)
    .map(option => option.value)
    .filter(value => value !== "");

// This array exists only while the page is open. Each amount is integer cents.
let expenses = [];
let nextId = 1;

function totalCents() {
    return expenses.reduce((total, expense) => total + expense.cents, 0);
}

function formatUSD(cents) {
    const dollars = Math.floor(cents / 100).toLocaleString("en-US");
    const remainingCents = String(cents % 100).padStart(2, "0");
    return `$${dollars}.${remainingCents}`;
}

function showError(message, input) {
    errorMessage.textContent = message;
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", "error-message");
    input.focus();
}

function clearError() {
    errorMessage.textContent = "";
    for (const input of [nameInput, amountInput, categoryInput]) {
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
    }
}

function renderExpenses() {
    expenseList.replaceChildren();

    for (const expense of expenses) {
        const item = document.createElement("li");
        const details = document.createElement("div");
        const name = document.createElement("strong");
        const summary = document.createElement("div");
        const deleteButton = document.createElement("button");

        // User-provided names are plain text, never executable HTML.
        name.textContent = expense.name;
        summary.textContent = `${expense.category} · ${formatUSD(expense.cents)}`;
        details.append(name, summary);

        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", `Delete ${expense.name}`);
        deleteButton.addEventListener("click", () => deleteExpense(expense.id));

        item.append(details, deleteButton);
        expenseList.append(item);
    }

    emptyMessage.hidden = expenses.length > 0;
    totalAmount.textContent = formatUSD(totalCents());
}

function deleteExpense(id) {
    const index = expenses.findIndex(expense => expense.id === id);
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();

    // Keep keyboard focus useful after removing the focused Delete button.
    const buttons = expenseList.querySelectorAll("button");
    const nextButton = buttons[Math.min(index, buttons.length - 1)];
    (nextButton || nameInput).focus();
}

form.addEventListener("submit", event => {
    event.preventDefault();
    clearError();

    const name = nameInput.value.trim();
    const amount = amountInput.value.trim();
    const category = categoryInput.value;

    if (name === "") {
        showError("Enter an expense name, not just spaces.", nameInput);
        return;
    }

    if (amount === "") {
        showError("Enter an amount.", amountInput);
        return;
    }

    // Check the decimal format first; exponent notation is not supported.
    if (!/^-?(?:\d+(?:\.\d+)?|\.\d+)$/.test(amount)) {
        showError("Enter a valid number.", amountInput);
        return;
    }

    if (Number(amount) <= 0) {
        showError("Enter an amount greater than zero.", amountInput);
        return;
    }

    const decimalPart = amount.split(".")[1] || "";
    if (decimalPart.length > 2) {
        showError("Use at most two decimal places, for example 12.50.", amountInput);
        return;
    }

    // Build cents from digits rather than multiplying a decimal by 100.
    const [dollars, fraction = ""] = amount.split(".");
    const cents = Number((dollars || "0") + fraction.padEnd(2, "0"));

    if (!Number.isSafeInteger(cents) || cents <= 0) {
        showError("Enter an amount greater than zero and small enough to track accurately.", amountInput);
        return;
    }

    if (!allowedCategories.includes(category)) {
        showError("Choose a category from the list.", categoryInput);
        return;
    }

    if (!Number.isSafeInteger(totalCents() + cents)) {
        showError("This amount would make the total too large to track accurately. Enter a smaller amount.", amountInput);
        return;
    }

    // Only change saved expenses after every validation check passes.
    expenses.push({ id: nextId++, name, cents, category });
    renderExpenses();
    form.reset();
    nameInput.focus();
});

renderExpenses();
