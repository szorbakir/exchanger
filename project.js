const amountInput = document.getElementById("amountInput");
const sourceInput = document.getElementById("sourceInput");
const targetInput = document.getElementById("targetInput");
const convertButton = document.getElementById("convertButton");
const informationContainer = document.getElementById("informationContainer");

amountInput.defaultValue = 1;

convertButton.addEventListener("click", startConversion);

function startConversion() {
  const converterObject = new Converter(sourceInput.value, targetInput.value);

  converterObject
    .convertCurrency()
    .then(currencyObject => {
      result = (Number(amountInput.value) * currencyObject.rates[targetInput.value]).toFixed(4);

      UserInterface.clearInformationContainer(informationContainer);
      console.log(result);
      UserInterface.createInformationContainer(
        amountInput.value,
        sourceInput.value,
        targetInput.value,
        result,
        currencyObject.rates[targetInput.value],
        informationContainer
      );
    })
    .catch(err => {
      UserInterface.showAlert(
        "Something went wrong with HTTP request!! --->" + err,
        informationContainer
      );
    });
}
