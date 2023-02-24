let create = document.getElementById("enter")
let name = document.getElementById("name")
let password = document.getElementById("pass")
let email = document.getElementById("email")
let number = document.getElementById("number")
let temp = JSON.parse(localStorage.getItem("details")) || [];
create.addEventListener("click", () => {
    let obj = {
        nameD: name.value,
        emailD: email.value,
        numberD: number.value,
        passD: password.value
    }
    temp.push(obj)
    localStorage.setItem("details", JSON.stringify(temp));
    Swal.fire(
        'Good job!',
        'Login Succesful',
        'success'
    )
    redirect();
})
function redirect() {
    setTimeout(() => { document.location.href = "./login.html"; }, 3000);
}