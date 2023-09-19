let myBalance = parseInt(document.getElementById("myAccountBalance").innerText);
function sendMoney(){
   var enterName = document.getElementById("enterName").value.toLowerCase();
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   if (enterAmount > 50000) {

      alert("Insufficient Balance.")
      
   } else {
            var findUserBank = enterName + "BankBalance";
            var finalAmount = parseInt(document.getElementById(findUserBank).innerHTML) + enterAmount;
            var myBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
            document.getElementById("myAccountBalance").innerText = myBalance
            document.getElementById(findUserBank).innerHTML = finalAmount;
            alert(`Successful Transaction !! The Amount of $${enterAmount} is sent to ${enterName} Successfully`)
            var createPTag = document.createElement("li");
            var textNode = document.createTextNode(`$${enterAmount} is sent to Recepient ${enterName.toUpperCase()} on ${Date()}.`);
            createPTag.appendChild(textNode);
            var element = document.getElementById("transaction-history");
            element.insertBefore(createPTag, element.firstChild);
   }
}

