
const sliders = document.querySelectorAll("input[type='range']");
const billInput = document.getElementById("bill");
sliders.forEach(function(slider){

    slider.addEventListener("input",calculateTip);
});

billInput.addEventListener("change",calculateTip);


function calculateTip(){
    var bill1 = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
   

    billInput.value = bill1.toFixed(2);
  
    if ( isNaN(billInput.value) ) {
        
        alert('Enter valid Input');
        billInput.value=0;
       
        
       
    } else {
       
    let totalTip = parseFloat((bill1 * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill1 + totalTip).toFixed(2));



    document.getElementById("tip-amount").textContent = `${totalTip}$`;
    document.getElementById("total-amount").textContent = `${total}$`;
    
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
  
    }
}

calculateTip();