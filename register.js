

function register(){
    user={
        uname:Username.value,
        accno:Accountnumber.value,
        pswd:password.value,
        balance: 0
    }


    if(user.uname=="" || user.accno=="" || user.pswd=="" ){
        alert("please fill the remaning field")
    }
    else if(user.accno.length!=4){
        alert("account number must be 4 digit")
    }
    else{
        if(user.accno in localStorage){
            alert("Account number already exist")
        }
        else{
            localStorage.setItem(user.accno,JSON.stringify(user));
            alert("sucessfully added")
            window.location='./login.html'
        }
    }
}

function login(){
     window.location='./login.html'
}
