
var cheeseVal=0;
var pepVal=0;
var chickVal=0;
var greenVal=0;
var mushVal=0;
var pizzaSize=40;
var pizzaSizeText="Small";

var totalCost = cheeseVal + pepVal + chickVal + greenVal+ mushVal+ pizzaSize;


function checkedFunction(){

  if(sessionStorage.getItem("pizzaSize")==40){
    document.getElementById("smallSize").click();
  }
  if(sessionStorage.getItem("pizzaSize")==60){
    document.getElementById("mediumSize").click();
  }
  if(sessionStorage.getItem("pizzaSize")==80){
    document.getElementById("largeSize").click();
  }

  if(sessionStorage.getItem("cheeseVal")==3){
    document.getElementById("cheese").click();
  }
  if(sessionStorage.getItem("pepVal")==5){
    document.getElementById("pep").click();
  }
  if(sessionStorage.getItem("chickVal")==7){
    document.getElementById("chick").click();
  }
  if(sessionStorage.getItem("greenVal")==4){
    document.getElementById("green").click();
  }
  if(sessionStorage.getItem("mushVal")==10){
    document.getElementById("mush").click();
  }
  

}
function smallPizza(){

    var radio = document.getElementById("smallSize")
    if (radio.checked==true){
        pizzaSize=40;
        pizzaSizeText="Small";
        sessionStorage.setItem("pizzaSize", 40);
        sessionStorage.setItem("pizzaSizeText", "Small");
        totalFunction();

        }
}
function mediumPizza(){

    var radio = document.getElementById("mediumSize")
    if (radio.checked==true){
        pizzaSize=60;
        pizzaSizeText="Medium";
        sessionStorage.setItem("pizzaSize", 60);
        sessionStorage.setItem("pizzaSizeText", "Medium");
        totalFunction();
}
}

function largePizza(){

    var radio = document.getElementById("largeSize")
    if (radio.checked==true){
        pizzaSize=80;
        pizzaSizeText="Large";
        sessionStorage.setItem("pizzaSize", 80);
        sessionStorage.setItem("pizzaSizeText", "Large");
        totalFunction();
}

}


function pizzaSizeDrop(){


        
      document.getElementById("PizzaSizeTextID").innerHTML = " Size Of Pizza" +pizzaSizeText;
}

function cheeseFunction() {

  var checkBox = document.getElementById("cheese");
  if (checkBox.checked == true){
    cheeseVal = 3;
    sessionStorage.setItem("cheeseVal", 3);
    totalFunction();
    
  } else {
     cheeseVal = 0;
     sessionStorage.setItem("cheeseVal", 0);
     totalFunction();
  }
}


function pepFunction() {
    var checkBox = document.getElementById("pep");
    if (checkBox.checked == true){
      pepVal =5;
      sessionStorage.setItem("pepVal", 5);
      totalFunction();
    } else {
       pepVal=0;
       sessionStorage.setItem("pepVal", 0);
       totalFunction();
    }
  }

  function chickenFunction() {
    var checkBox = document.getElementById("chick");
    
    if (checkBox.checked == true){
      chickVal = 7;
      sessionStorage.setItem("chickVal", 7);
      totalFunction();
    } else {
       chickVal = 0;
       sessionStorage.setItem("chickVal", 0);
       totalFunction();
    }
  }

  function greenFunction() {
    var checkBox = document.getElementById("green");

    if (checkBox.checked == true){

      greenVal = 4;
      sessionStorage.setItem("greenVal", 4);
      totalFunction();
    } else {
       greenVal = 0;
       totalFunction();
    }
  }

  function mushFunction() {
    var checkBox = document.getElementById("mush");
    if (checkBox.checked == true){
      mushVal = 10;
      sessionStorage.setItem("mushVal", 10);
      totalFunction();
    } else {
       mushVal = 0;
       sessionStorage.setItem("mushVal", 0);
       totalFunction();
    }
  }







  ////////////////////////////////////////







  function totalFunction(){
    
    
   totalCost = cheeseVal + pepVal + chickVal + greenVal+ mushVal+ pizzaSize;
   var temp =totalCost;
   sessionStorage.setItem("totalCost", temp);
    document.getElementById("total").innerHTML = "Total Cost: $"+ totalCost+".00";
  
}

function completedFunction(){

   document.getElementById("completed").innerHTML = pizzaSizeText + "Pizza: $" +pizzaSize+".00";
 
}


document.getElementById("sizeComplete").innerHTML = sessionStorage.getItem("pizzaSizeText") + " Pizza: $" +sessionStorage.getItem("pizzaSize")+".00";

if(sessionStorage.getItem("cheeseVal")==3){
  document.getElementById("cheeseComplete").innerHTML = " + Cheese: $" +sessionStorage.getItem("cheeseVal")+".00";
}
if(sessionStorage.getItem("pepVal")==5){
  document.getElementById("pepComplete").innerHTML = " + Pepperoni: $" +sessionStorage.getItem("pepVal")+".00";
}
if(sessionStorage.getItem("chickVal")==7){
  document.getElementById("chickComplete").innerHTML = " + Chicken: $" +sessionStorage.getItem("chickVal")+".00";
}
if(sessionStorage.getItem("greenVal")==4){
  document.getElementById("greenComplete").innerHTML = " + Green Pepers: $" +sessionStorage.getItem("greenVal")+".00";
}
if(sessionStorage.getItem("mushVal")==10){
  document.getElementById("mushComplete").innerHTML = " + Mushrooms: $" +sessionStorage.getItem("mushVal")+".00";
}

document.getElementById("total").innerHTML = "Total Cost: $"+ sessionStorage.getItem("totalCost")+".00";
  


function resetFunction(){

sessionStorage.setItem("pizzaSize", 40);
sessionStorage.setItem("cheeseVal",0)
sessionStorage.setItem("pepVal",0)
sessionStorage.setItem("chickVal",0)
sessionStorage.setItem("greenVal",0)
sessionStorage.setItem("mushVal",0)
sessionStorage.setItem("pizzaSizeText=","Small")
sessionStorage.setItem("totalCost", 40);

}






/*

  //for checkoutcheckboxes////////////////////////////////////////////////////////////
  

  function cheeseFunction2() {

    var checkBox = document.getElementById("cheeseCheck");
    if (checkBox.checked == true){
      cheeseVal = 3;
      sessionStorage.setItem("cheeseVal", 3);
      totalFunction();
      viewTotal()
      
    } else {
       cheeseVal = 0;
       sessionStorage.setItem("cheeseVal", 0);
       totalFunction();
       viewTotal()
    }
  }
  

  function pepFunction2() {
      var checkBox = document.getElementById("pepCheck");
      if (checkBox.checked == true){
        pepVal =5;
        sessionStorage.setItem("pepVal", 5);
        totalFunction();
      } else {
         pepVal=0;
         sessionStorage.setItem("pepVal", 0);
         totalFunction();
      }
    }
  
    function chickenFunction2() {
      var checkBox = document.getElementById("chickCheck");
      
      if (checkBox.checked == true){
        chickVal = 7;
        sessionStorage.setItem("chickVal", 7);
        totalFunction();
      } else {
         chickVal = 0;
         sessionStorage.setItem("chickVal", 0);
         totalFunction();
      }
    }
  
    function greenFunction2() {
      var checkBox = document.getElementById("greenCheck");
  
      if (checkBox.checked == true){
  
        greenVal = 4;
        sessionStorage.setItem("greenVal", 4);
        totalFunction();
      } else {
         greenVal = 0;
         totalFunction();
      }
    }
  
    function mushFunction2() {
      var checkBox = document.getElementById("mushCheck");
      if (checkBox.checked == true){
        mushVal = 10;
        sessionStorage.setItem("mushVal", 10);
        totalFunction();
      } else {
         mushVal = 0;
         sessionStorage.setItem("mushVal", 0);
         totalFunction();
      }
    }


    function viewTotal(){

  document.getElementById("view").innerHTML = "Total Cost: $"+ sessionStorage.getItem("totalCost")+".00";
}

document.getElementById("view").innerHTML = "Total Cost: $"+ sessionStorage.getItem("totalCost")+".00";
    */