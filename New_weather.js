let lat =0;
let long =0;
const l = document.querySelector('.preload');
const emoji = l.querySelector('.emoji');

const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 125;
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
  //displayLoading()
  init();
    fetch(apiUrl)
    .then(function(res){
        console.log(res);
        document.querySelector(".preload").style.display = "none";
      return res.json();
    })
    .then(function(jsonData){
     console.log(jsonData);
   //  hideLoading()
 
      render(jsonData);
     // match(jsonData);
     
    })
   
    .catch();
  }
 

function fetchSearch(apiLoc){
  init();
    fetch(apiLoc)
    .then(function(res){
        console.log(res);
        document.querySelector(".preload").style.display = "none";
      return res.json();
    })
    .then(function(data){
     console.log(data);
     render(data);
    })
    .catch();
  }
  
  function search() {
    let loc=(document.querySelector(".search_bar").value);
    console.log(loc);
    
    let apiLoc = " https://weatherdbi.herokuapp.com/data/weather/"+loc+"";
   // console.log(apiloc);
 
    fetchSearch(apiLoc); 
  
  };
document.querySelector(".search button").addEventListener("click", function () {
   search();
   
  });
  document.querySelector(".search_bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter")
{
  search();
}    
   });
  let btn = document.getElementById("buttn");
  btn.addEventListener('click',fetchSearch);
  
  

function render(jsonData){
  if(jsonData.status == "fail" && jsonData.message== "invalid query")
  {
    document.getElementById("city").textContent = "Invalid Query!";
    document.getElementById("des").textContent= "unavailable";
    document.getElementById("hum").textContent= "Humidity : ";
    document.getElementById("temperature").textContent= "Unavailable";
    document.getElementById("prec").textContent= "Precipitation : ";
    document.getElementById("win").textContent= "Wind : ";
    document.getElementById("day").textContent= "Day Hour : "; 
    
  }
  else if(jsonData.status == "fail" && jsonData.message== "Search by coordinates not available due to excessive use of this feature. Try after sometime or avail other methods available")
  {
    document.getElementById("city").textContent = "Sorry API is down,come someother time!";
  
  }
 /* if(jsonData.status == "fail"){
    document.getElementById("city").textContent = "Sorry API is down,come someother time!";
  }*/
  else
  {
  document.getElementById("city").innerHTML= "Weather in "+jsonData.region;
  document.getElementById("hum").textContent= "Humidity : "+jsonData.currentConditions.humidity;
  document.getElementById("icon").src = jsonData.currentConditions.iconURL;
  document.getElementById("temperature").textContent= jsonData.currentConditions.temp.c +'°c';
  document.getElementById("prec").textContent= "Precipitation : "+jsonData.currentConditions.precip;
  document.getElementById("des").textContent= jsonData.currentConditions.comment;
  document.getElementById("win").textContent= "Wind : "+jsonData.currentConditions.wind.km +'km/h';
  document.getElementById("day").textContent= "Day Hour : "+jsonData.currentConditions.dayhour;

 nextDays(jsonData);
  
  }

}
function nextDays(jsonData)
{
  document.getElementById("icon1").src = jsonData.next_days[0].iconURL;
  document.getElementById("mon").textContent = jsonData.next_days[0].day;
  document.getElementById("des1").textContent = jsonData.next_days[0].comment;
  document.getElementById("max1").textContent = "Max : "+jsonData.next_days[0].max_temp.c+"°c";
  document.getElementById("min1").textContent = "Min : "+jsonData.next_days[0].min_temp.c+"°c";

  document.getElementById("icon2").src = jsonData.next_days[1].iconURL;
  document.getElementById("tue").textContent = jsonData.next_days[1].day;
  document.getElementById("des2").textContent = jsonData.next_days[1].comment;
  document.getElementById("max2").textContent = "Max : "+jsonData.next_days[1].max_temp.c+"°c";
  document.getElementById("min2").textContent = "Min : "+jsonData.next_days[1].min_temp.c+"°c";

  document.getElementById("icon3").src = jsonData.next_days[2].iconURL;
  document.getElementById("wed").textContent = jsonData.next_days[2].day;
  document.getElementById("des3").textContent = jsonData.next_days[2].comment;
  document.getElementById("max3").textContent = "Max : "+jsonData.next_days[2].max_temp.c+"°c";
  document.getElementById("min3").textContent = "Min : "+jsonData.next_days[2].min_temp.c+"°c";

  document.getElementById("icon4").src = jsonData.next_days[3].iconURL;
  document.getElementById("thur").textContent = jsonData.next_days[3].day;
  document.getElementById("des4").textContent = jsonData.next_days[3].comment;
  document.getElementById("max4").textContent = "Max : "+jsonData.next_days[3].max_temp.c+"°c";
  document.getElementById("min4").textContent = "Min : "+jsonData.next_days[3].min_temp.c+"°c";

  document.getElementById("icon5").src = jsonData.next_days[4].iconURL;
  document.getElementById("fri").textContent = jsonData.next_days[4].day;
  document.getElementById("des5").textContent = jsonData.next_days[4].comment;
  document.getElementById("max5").textContent = "Max : "+jsonData.next_days[4].max_temp.c+"°c";
  document.getElementById("min5").textContent = "Min : "+jsonData.next_days[4].min_temp.c+"°c";

  document.getElementById("icon6").src = jsonData.next_days[5].iconURL;
  document.getElementById("sat").textContent = jsonData.next_days[5].day;
  document.getElementById("des6").textContent = jsonData.next_days[5].comment;
  document.getElementById("max6").textContent = "Max : "+jsonData.next_days[5].max_temp.c+"°c";
  document.getElementById("min6").textContent = "Min : "+jsonData.next_days[5].min_temp.c+"°c";

  document.getElementById("icon7").src = jsonData.next_days[6].iconURL;
  document.getElementById("sun").textContent = jsonData.next_days[6].day;
  document.getElementById("des7").textContent = jsonData.next_days[6].comment;
  document.getElementById("max7").textContent = "Max : "+jsonData.next_days[6].max_temp.c+"°c";
  document.getElementById("min7").textContent = "Min : "+jsonData.next_days[6].min_temp.c+"°c";
   
  document.getElementById("icon8").src = jsonData.next_days[7].iconURL;
  document.getElementById("mon2").textContent = jsonData.next_days[7].day;
  document.getElementById("des8").textContent = jsonData.next_days[7].comment;
  document.getElementById("max8").textContent = "Max : "+jsonData.next_days[7].max_temp.c+"°c";
  document.getElementById("min8").textContent = "Min : "+jsonData.next_days[7].min_temp.c+"°c";

  
}

function error(e){
    console.log(e);
    alert('Error: ' + e.message);
}
setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1500);
// selecting loading div
const loader = document.querySelector("#loading");
const loadEmojis = (arr) => {
  setInterval(() => {
    emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
    //console.log(Math.floor(Math.random() * arr.length))
  }, interval);
}

const init = () => {
loadEmojis(emojis);
}


navigator.geolocation.getCurrentPosition(success, error);
