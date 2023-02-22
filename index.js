let main = document.getElementById("card-wrapper")
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

let nav = document.querySelector("header")
window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        nav.style.top = "24px"
    }
    else {
        nav.style.top = "0px"
    }
})
const url = "https://mocki.io/v1/7e223f29-3900-40f0-b47e-53be469ee1d6"
async function fet() {
    let res = await fetch(url)
    let data = await res.json();
    disDat(data)
    console.log(data)
}
fet()
function disDat(arr) {
    arr.forEach(element => {
        let childDiv = document.createElement("div");
        childDiv.setAttribute("class", "swiper-slide")
        let img = document.createElement("img");
        img.setAttribute("src", element.img);
        let heading = document.createElement("h4");
        heading.innerText = element.name;
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
    });
}
// https://mocki.io/v1/384fff42-069d-4b1d-bc56-3221c6402fec