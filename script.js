let formElement = document.querySelector(".form");
let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.5829;
let USD = 3.8066;
let GBP = 5.2908;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN = +plnElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = (PLN / EUR).toFixed(2);
            break;
        case "GBP":
            result = (PLN / GBP).toFixed(2);
            break;
        case "USD":
            result = (PLN / USD).toFixed(2);
            break;
        default:
            result = "Ups, coś poszło nie tak...";
    }
    resultElement.innerHTML = result + ` ${currency}`;
});