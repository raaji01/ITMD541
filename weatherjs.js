let lat =0;
let long =0;
function success(p){
    console.log(p);
    lat= p.coords.latitude;
    long= p.coords.longitude;
    console.log('Lat: ' + lat + ', Long: ' + long);
    //document.getElementsByTagName('body')[0].appendChild(document.createTextNode('Lat: ' + lat + ', Long: ' + lon));

let apiUrl ="https://weatherdbi.herokuapp.com/data/weather/"+ lat +"," + long +"";
//console.log(apiUrl);
fetchLoc(apiUrl);
}
function fetchLoc(apiUrl){
    
    fetch(apiUrl)
    .then(function(res){
        console.log(res);
      return res.json();
    })
    .then(function(jsonData){
     console.log(jsonData);
      render(jsonData);
     
    })
    .catch();
  }
  function search() {
    this.fetchLoc(document.querySelector(".search_bar").value);
  };
 /** document.querySelector(".search button").addEventListener("click", function () {
    search();
  });

  
  document.querySelector(".search_bar")
  document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
    search();
    }
  }); */
function render(jsonData){
  document.getElementById("citty").innerHTML= jsonData.region;
  document.getElementById("hum").textContent= "Humidity:"+jsonData.currentConditions.humidity;
  document.getElementById("tem").textContent= "Temp:"+jsonData.currentConditions.temp.c +'°c';
  document.getElementById("des").textContent= jsonData.currentConditions.comment;
  document.getElementById("win").textContent= "Wind:"+jsonData.currentConditions.wind.km +'km/h';



}

function error(e){
    console.log(e);
    alert('Error: ' + e.message);
}


navigator.geolocation.getCurrentPosition(success, error);
