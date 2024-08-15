
const loggedInAccountNumber = localStorage.getItem('Account');

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});




function deposit() {
    let accno = document.getElementById('depositeAccno').value;
    let amount = Number(document.getElementById('amt').value);

    // Check if the deposit is made to the logged-in account
    if (accno === loggedInAccountNumber) {
        if (localStorage.getItem(accno)) {
            let user = JSON.parse(localStorage.getItem(accno));
            user.balance += amount;
            localStorage.setItem(accno, JSON.stringify(user));
            alert(`₹${amount} has been added to your account.`);
            document.getElementById('result').innerHTML = `Your current balance is ₹${user.balance}`;
        } else {
            alert("Account number does not exist.");
        }
    } else {
        alert("You can only deposit into your own account.");
    }
}

// Function to handle withdraw action
function withdraw() {
    let accno = document.getElementById('withdrawAccno').value;
    let amount = Number(document.getElementById('withdrawAmt').value);

    // Check if the withdrawal is made from the logged-in account
    if (accno === loggedInAccountNumber) {
        if (localStorage.getItem(accno)) {
            let user = JSON.parse(localStorage.getItem(accno));
            if (user.balance >= amount) {
                alert(`balance befor Withdrawal was ${user.balance}`)
                user.balance -= amount;
                localStorage.setItem(accno, JSON.stringify(user));
                alert(`₹${amount} is the Withdrawel amount.`);
                alert("withdrawel Sucess")
                alert(`After withdrawel , balance ${user.balance} `)
                document.getElementById('result1').innerHTML = `Your current balance is ₹${user.balance}`;
            } else {
                alert("Insufficient balance.");
            }
        } else {
            alert("Account number does not exist.");
        }
    } else {
        alert("You can only withdraw from your own account.");
    }
}

// Adding event listeners for the buttons to avoid inline JavaScript in HTML
document.getElementById('depositBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    deposit();
});

document.getElementById('withdrawBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    withdraw();
});



function logout(){
    window.location='./index.html'
}