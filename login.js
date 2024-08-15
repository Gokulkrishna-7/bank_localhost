
function login() {
    // Get login details from input fields
    const logindetails = {
        accno: document.getElementById('loginAccno').value,
        pswd: document.getElementById('loginPswd').value
    };

    // Basic validation
    if (logindetails.accno === "" || logindetails.pswd === "") {
        alert("Please fill in all fields.");
    } else if (logindetails.accno.length !== 4) {
        alert("Account number must be 4 digits.");
    } else {
        // Check if the account number exists in localStorage
        if (localStorage.getItem(logindetails.accno)) {
            // Retrieve the stored user details
            const storedUser = JSON.parse(localStorage.getItem(logindetails.accno));

            // Check if the password matches
            if (logindetails.pswd === storedUser.pswd) {
                alert("Login successful!");
                localStorage.setItem('Account',logindetails.accno)
                // Redirect to the next page
                window.location.href = './transaction.html';
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("Account number not found.");
        }
    }
    
    
}

function home() {
    window.location.href = './index.html';
}


function home(){
    window.location='./index.html'
}