{
    const calculateExchange = (plnValue, currency) => {
        const EUR = 4.5829;
        const USD = 3.8066;
        const GBP = 5.2908;

        switch (currency) {
            case "EUR":
                return (plnValue / EUR).toFixed(2);
            case "GBP":
                return (plnValue / GBP).toFixed(2);
            case "USD":
                return (plnValue / USD).toFixed(2);
        };
    };

    const updateTextResult = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = result + ` ${currency}`;
    };

    const onFormSumbit = (e) => {
        e.preventDefault();

        const plnValueElement = document.querySelector(".js-pln");
        const currency = document.querySelector(".js-currency").value;
        const plnValue = +plnValueElement.value;
        const result = calculateExchange(plnValue, currency);

        updateTextResult(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".form");
        formElement.addEventListener("submit", onFormSumbit);
    };

    init();
}