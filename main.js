const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
let tipAmountDiv;
let totalTip;
let totalPerPersonDiv
calculateBtn.addEventListener('click', calculateTip);
resetBtn.addEventListener('click', resetTip);

function calculateTip () {
 const billAmount = document.getElementById('billAmount').value;
 const numOfPeople = document.getElementById('numOfPeople').value;
 const serviceQuality = document.getElementById('serviceQuality').value;

 if(billAmount === "") {
   alert('Please Enter your Bill Amount');
   tipAmountDiv.style.display = "none";
 }

 let tipAmount = (Math.round(parseFloat(billAmount) * parseFloat(serviceQuality) * 100) / 100);
 console.log(tipAmount);
 let tipTotal = (Math.round((tipAmount / numOfPeople) * 100) / 100);
 console.log(tipTotal);
 let totalAmount = (Math.round((tipAmount + parseFloat(billAmount)) * 100) / 100);
 console.log("$" + totalAmount);
 let totalPerPerson = (Math.round((totalAmount / numOfPeople) * 100) / 100);
 console.log('$' + totalPerPerson);

 let calculator = document.getElementById('calculator');
 tipAmountDiv = document.createElement("div");
 tipAmountDiv.classList.add('tipAmount');
 tipAmountDiv.textContent = "Total Tip Amount: $" + tipAmount;
 calculator.appendChild(tipAmountDiv);

 totalTip = document.createElement("div");
 totalTip.textContent = "Tip Per Person: $" + tipTotal;
 totalTip.classList.add('totalTip');
 calculator.appendChild(totalTip);

 totalPerPersonDiv = document.createElement("div");
 totalPerPersonDiv.textContent = "Total Per Person: $" + totalPerPerson;
 totalPerPersonDiv.classList.add('totalTip');
 calculator.appendChild(totalPerPersonDiv);
}

function resetTip() {
  calculator.removeChild(tipAmountDiv);
  calculator.removeChild(totalTip);
  calculator.removeChild(totalPerPersonDiv);

  let billAmount = document.getElementById('billAmount');
  let numOfPeople = document.getElementById('numOfPeople');
  let serviceQuality = document.getElementById('serviceQuality');

  billAmount.value = billAmount.defaultValue;
  numOfPeople.value = numOfPeople.defaultValue;
  serviceQuality.value = serviceQuality.defaultValue;
}
