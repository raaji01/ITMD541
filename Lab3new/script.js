const sliders = document.querySelectorAll("input[type='range']");
const billInput = document.getElementById("bill");
sliders.forEach(function(slider){
   


    slider.addEventListener("input",calculateTip);
});

billInput.addEventListener("change",calculateTip);


function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
   

    billInput.value = bill.toFixed(2);
    if (billInput.value === "0.00" || isNaN(billInput.value) ) {
        alert('Enter bill amount, please!')
    } else {
       
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));



    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
  
    }
}

calculateTip();