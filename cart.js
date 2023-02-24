let nav = document.querySelector("header")
window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        nav.style.top = "24px"
    }
    else {
        nav.style.top = "0px"
    }
})
let main = document.getElementById("cardwrap")
let temp = JSON.parse(localStorage.getItem("cart"));
if (temp == null) {
    temp = []
}
let amountNo = 0;
let amount = document.getElementById("amount")
disData(temp)
function disData(array) {
    array.forEach(element => {
        let chDiv = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", element.img);
        let name = document.createElement("h3");
        name.innerText = element.name;
        let desc = document.createElement("p");
        desc.innerText = element.Desc;
        let weight = document.createElement("p")
        weight.innerText = element.weight;
        let priceDiv = document.createElement("div");
        let price = document.createElement("h3")
        price.innerText = `₹ ${element.price}`;
        amountNo += Number(element.price)
        amount.innerText = amountNo;
        let quan = document.createElement("h3");
        let plus = document.createElement("i");
        plus.setAttribute("class", "fa-solid fa-plus")
        let minus = document.createElement("i");
        minus.setAttribute("class", "fa-solid fa-minus")
        let quanText = document.createElement("span");
        quanText.innerText = "1";
        quan.append(plus, quanText, minus)
        // let plus = document.getElementById("plus")
        // let minus = document.getElementById("minus")
        priceDiv.setAttribute("class", "p")
        priceDiv.append(price, quan);
        let rem = document.createElement("div")
        let btn = document.createElement("button")
        btn.innerText = "Remove"
        rem.setAttribute("class", "rem")
        rem.append(btn)
        chDiv.append(img, name, desc, weight, priceDiv, rem)
        main.append(chDiv)
        plus.addEventListener("click", () => {
            // console.log("yoo")
            element.quantity++;
            quanText.innerText = element.quantity;
            amountNo += Number(element.price);
            amount.innerText = amountNo;
            localStorage.setItem("cart", JSON.stringify(temp));
        })
        minus.addEventListener("click", () => {
            element.quantity--;
            quanText.innerText = element.quantity;
            amountNo -= Number(element.price);
            amount.innerText = amountNo;
            localStorage.setItem("cart", JSON.stringify(temp));
        })
        btn.addEventListener("click", () => {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Item has been deleted.',
                        'success'
                    )
                    chDiv.remove();
                    temp = temp.filter((e) => {
                        return e.id != element.id
                    })
                    localStorage.setItem("cart", JSON.stringify(temp))
                    amountNo -= element.price * element.quantity;
                    amount.innerText = amountNo;
                }
            })

        })

    });
}