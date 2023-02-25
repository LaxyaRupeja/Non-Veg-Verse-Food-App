let main = document.getElementById("card-wrapper")
let main2 = document.getElementById("cd-wrapper")
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
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
let nav = document.querySelector("header")
window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        nav.style.top = "24px"
    }
    else {
        nav.style.top = "0px"
        dropdown.style.display = "none"
    }
})
var sweeper = new Swiper(".mySweeper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
let temp = JSON.parse(localStorage.getItem("cart"));
if (temp == null) {
    temp = []
}
const url = "https://mocki.io/v1/34504bf7-1343-4b10-86d3-2857f1ddccd4"
const url2 = "https://mocki.io/v1/d22fd05d-1139-4b48-9829-28b8217af688"
async function fet() {
    let res = await fetch(url);
    let data = await res.json();
    let res2 = await fetch(url2)
    let data2 = await res2.json();
    disData(data)
    disDat(data2)
    console.log(data)
    console.log(data2)
}
fet()
function disData(arr) {
    arr.forEach(element => {
        let childDiv = document.createElement("div");
        childDiv.setAttribute("class", "swiper-slide")
        let img = document.createElement("img");
        img.setAttribute("src", element.img);
        let heading = document.createElement("h4");
        heading.innerText = element.name;
        element.quantity = 1;
        let desc = document.createElement("p");
        desc.innerText = element.Desc;
        desc.setAttribute("class", "firstchild");
        let weight = document.createElement("p");
        weight.innerText = element.weight;
        weight.setAttribute("class", "secondchild");
        let pricecart = document.createElement("div");
        pricecart.setAttribute("class", "pricecart");
        let price = document.createElement("h3")
        price.innerText = `₹ ${element.price}`;
        let addtocart = document.createElement("button");
        addtocart.innerText = "Add to Cart";
        pricecart.append(price, addtocart);
        let deli = document.createElement("div");
        deli.setAttribute("class", "deli")
        let imag = document.createElement("img");
        imag.setAttribute("src", "https://www.licious.in/img/rebranding/express_delivery.svg");
        let time = document.createElement("p");
        time.innerText = "Today 4PM - 6PM";
        deli.append(imag, time)
        childDiv.append(img, heading, desc, weight, pricecart, deli)
        main2.append(childDiv);
        addtocart.addEventListener("click", () => {
            if (!(temp.includes(element))) {
                temp.push(element);
                localStorage.setItem("cart", JSON.stringify(temp))
                Swal.fire(
                    'Good job!',
                    'Product Added to cart',
                    'success'
                )
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Product Already in Cart',
                    footer: '<a href="./cart.html">👉 Go to cart</a>'
                })
            }
        })
    });
}

// https://mocki.io/v1/384fff42-069d-4b1d-bc56-3221c6402fec
function disDat(arr) {
    arr.forEach(element => {
        let childDiv = document.createElement("div");
        childDiv.setAttribute("class", "swiper-slide")
        let img = document.createElement("img");
        img.setAttribute("src", element.img);
        let heading = document.createElement("h4");
        heading.innerText = element.name;
        element.quantity = 1;
        let desc = document.createElement("p");
        desc.innerText = element.Desc;
        desc.setAttribute("class", "firstchild");
        let weight = document.createElement("p");
        weight.innerText = element.weight;
        weight.setAttribute("class", "secondchild");
        let pricecart = document.createElement("div");
        pricecart.setAttribute("class", "pricecart");
        let price = document.createElement("h3")
        price.innerText = `₹ ${element.price}`;
        let addtocart = document.createElement("button");
        addtocart.innerText = "Add to Cart";
        pricecart.append(price, addtocart);
        let deli = document.createElement("div");
        deli.setAttribute("class", "deli")
        let imag = document.createElement("img");
        imag.setAttribute("src", "https://www.licious.in/img/rebranding/express_delivery.svg");
        let time = document.createElement("p");
        time.innerText = "Today 4PM - 6PM";
        deli.append(imag, time)
        childDiv.append(img, heading, desc, weight, pricecart, deli)
        main.append(childDiv);
        addtocart.addEventListener("click", () => {
            if (!(temp.includes(element))) {
                temp.push(element);
                localStorage.setItem("cart", JSON.stringify(temp))
                Swal.fire(
                    'Good job!',
                    'Product Added to Cart',
                    'success'
                )
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Product Already in Cart',
                    footer: '<a href="./cart.html">👉 Go to cart</a>'
                })
            }
        })
    });
}
let catClick = document.getElementsByClassName("caterg")[0];
let dropdown = document.getElementsByClassName("dropdown")[0];
catClick.addEventListener("click", () => {
    if (dropdown.style.display == "block") {
        dropdown.style.display = "none"
    }
    else {
        dropdown.style.display = "block"
    }
})