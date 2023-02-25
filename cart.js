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
let amountNo = 0;
let amount = document.getElementById("amount")
disData(temp)
function disData(array) {
    main.innerHTML = ""
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
            if (element.quantity == 0) {
                element.quantity = 1;
            }
            quanText.innerText = element.quantity;
            totalCart();
            localStorage.setItem("cart", JSON.stringify(temp));
        })
        minus.addEventListener("click", () => {
            element.quantity--;
            if (element.quantity == 0) {
                element.quantity = 1;
            }
            quanText.innerText = element.quantity;
            totalCart();
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
                    totalCart()
                }
            })

        })

    });
    totalCart();
}
let sort = document.getElementById("sort");
sort.addEventListener("change", () => {
    if (sort.value == "") {
        disData(temp);
        totalCart();
    }
    else {
        if (sort.value == "htol") {
            let tol = temp.sort((a, b) => {
                if (a.price < b.price) {
                    return 1;
                }
                else {
                    return -1
                }
            })
            disData(tol);
            totalCart();
        }
        if (sort.value == "ltoh") {
            let htol = temp.sort((a, b) => {
                if (a.price > b.price) {
                    return 1;
                }
                else {
                    return -1
                }
            })
            disData(htol)
            totalCart();
        }
    }
})
function totalCart() {
    let summ = 0;
    for (let i = 0; i < temp.length; i++) {
        summ += (temp[i].price * temp[i].quantity)

    }
    amount.innerText = summ;
}
let search = document.getElementById("search");
let searchbtn = document.getElementById("search-but");
searchbtn.addEventListener("click", () => {
    // console.log(queryArr)
    let searched = temp.filter((e) => {
        let query = search.value;
        if (e.name.includes(query)) return e;
    })
    disData(searched)
})