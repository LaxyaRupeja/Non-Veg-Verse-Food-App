let inputOtp = document.getElementById("pass");
let but2 = document.getElementById("ent")
let login = document.getElementById("login-card")
let bttt = document.getElementById("enter")
let num = document.getElementById("num");
bttt.addEventListener("click", () => {
    inputOtp.style.display = "block";
    login.style.height = "600px"
    bttt.style.display = "none"
    but2.style.display = "block"
})
let temp = JSON.parse(localStorage.getItem("details"))
if (temp == null) {
    temp = []
}
but2.addEventListener("click", () => {
    // console.log("yes")
    let flag = false;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].numberD == num.value && temp[i].passD == inputOtp.value) {
            flag = true;
            break;
        }
    }
    if (flag) {
        Swal.fire(
            'Good job!',
            'Login Succesful',
            'success'
        )
        redirect();
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect Password or Number'
        })
    }
})
function redirect() {
    setTimeout(() => { document.location.href = "./index.html"; }, 1000);
}