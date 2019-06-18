class UserInterface {
  //TODO : Can be achieved with something pretty. Try!!!
  static clearInformationContainer(el) {
    while (informationContainer.firstChild) {
      informationContainer.removeChild(informationContainer.firstChild);
    }
  }

  static createInformationContainer(amount, source, target, result, rate, container) {
    container.innerHTML = `
        <div id="sourceRow" class="row justify-content-center"><h4>${amount} ${source}=</h4></div>
        <div id="targetRow" class="row justify-content-center">
          <h1 class="display-4"> ${result} ${target}</h1>
        </div>
        <br/>
        <div class="row justify-content-center">
        <h4>1 ${target} = ${rate} ${source}</h4>
        </div> 
        <div class="row justify-content-center">
          All figures are live in Exchange rates API which is a free service for current and
          historical foreign exchange rates published by the European Central Bank.
        </div> `;
  }

  static showAlert(message, el) {
    //* create alert element:
    const new_alert = document.createElement("div");
    new_alert.className = `alert alert-danger shadow`;
    new_alert.setAttribute("role", "alert");
    new_alert.style.marginTop = "10px";
    new_alert.appendChild(document.createTextNode(message));

    //* add alert element to the submit form
    el.appendChild(new_alert);
    //* after 3.0s remove alert element if success:
    setTimeout(function() {
      new_alert.remove();
    }, 3000);
  }
}
