let monthlyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;

let monthlyBudget = document.getElementById("monthlyBudget");
let incomeInput = document.getElementById("incomeInput");
let updateBudgetButton = document.getElementById("updateBudgetButton");

let nameInput = document.getElementById("nameInput");
let amountInput = document.getElementById("amountInput");
let addExpenseButton = document.getElementById("addExpenseButton");

let expenseList = document.getElementById("expenseList");
let totalExpenses = document.getElementById("totalExpenses");
let remainingBalance = document.getElementById("remainingBalance");

function updateBudget(event) {
console.log("updateBudget fired!");
event.preventDefault();
monthlyIncome = parseInt(incomeInput.value);
monthlyBudget.innerText = "$" + monthlyIncome;
updateBalance();
}

updateBudgetButton.onclick = updateBudget;

function updateBalance(event) {
console.log("updateBalance fired!");
balance = monthlyIncome - expenseTotal;
remainingBalance.innerText = "$" + balance;


if (balance < 0) {
remainingBalance.classList.add("red");
remainingBalance.classList.remove("green");
} else {
remainingBalance.classList.remove("red");
remainingBalance.classList.add("green");
}}

function addExpense(event) {
    console.log("addExpense fired!");
    event.preventDefault();
    let expense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value)
    };
    expenses.push(expense);
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    updateExpenseTotal();
    }

addExpenseButton.onclick = addExpense;

function updateExpenseTotal() {
    console.log("updateExpenseTotal fired!")
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
}