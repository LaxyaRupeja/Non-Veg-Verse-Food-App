let amo = document.getElementById("total-amount");
let temp = JSON.parse(localStorage.getItem("cart"));
if (temp == null) {
    temp = []
}
let clear = []
let amountNo = 0;
window.addEventListener("load", () => {
    temp.forEach(element => {
        amountNo += (Number(element.price) * element.quantity)
    });
    amo.innerText = amountNo
})
let pay = document.getElementById("pay");
pay.addEventListener("click", () => {
    Swal.fire(
        'Order Placed',
        'Will be Delivered Shortly',
        'success'
    )
    localStorage.setItem("cart", JSON.stringify(clear))
    redirect();
})
let disName = document.getElementById("userD");
window.addEventListener("load", () => {
    let something = JSON.parse(localStorage.getItem("login")) || []
    if (something.length == 0) {
        disName.innerText = "Login"
    }
    else {
        disName.innerText = something[0]
    }
})
function redirect() {
    setTimeout(() => { document.location.href = "./index.html"; }, 1000);
}
let payment = document.getElementsByClassName("payment")[0]
let logincard = document.getElementsByClassName("login-card")[0];
let enter = document.getElementById("enter");
enter.addEventListener("click", () => {
    Swal.fire('Enter your Card details here')
    logincard.style.display = "none";
    payment.style.display = "block"
})