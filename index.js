var myCar = null
function init() {
        myCar = document.getElementById("car");
        myCar.style.position = "absolute";
        myCar.style.left = "1%";
        myCar.style.bottom ="2%";  
      }


document.addEventListener('keydown', (e)=> {
switch (e.key){
  case 'ArrowLeft':
  console.log("pressed left");
  moveLeft();
  break;

  case 'ArrowRight': 
  console.log("presser right");
  moveRight();
  break;
}
});

    function moveRight() {

      myCar.style.left = parseInt(myCar.style.left) + 1 +"%";
      if(myCar.style.left == 100- 2*myCar.style.width +"%"){
        console.log("reached corner");
      }
      if(myCar.style.left == "10%"){
        console.log("About me");
        document.getElementById("C1").style.animation ="MakeTextAppear 2s 1 linear forwards";
      }

      if(myCar.style.left == "20%"){
        console.log("About me fade out");
        document.getElementById("C1").style.animation ="MakeTextDisappear 2s 1 linear forwards";
      }     

      if(myCar.style.left == "26%"){
        console.log("Board2 get in");
        document.getElementById("C2").style.animation ="MakeTextAppear 2s 1 linear forwards";
      }     

      if(myCar.style.left == "30%"){
        console.log("Board2 fade out");
        document.getElementById("C2").style.animation ="MakeTextDisappear 2s 1 linear forwards";
      }     

      if(myCar.style.left == "45%"){
        console.log("Board3 get in");
        document.getElementById("C3").style.animation ="MakeTextAppear 2s 1 linear forwards";
      }  

      if(myCar.style.left == "50%"){
        console.log("Board3 fade out");
        document.getElementById("C3").style.animation ="MakeTextDisappear 2s 1 linear forwards";
      }     

      if(myCar.style.left == "65%"){
        console.log("Board4 get in");
        document.getElementById("C4").style.animation ="MakeTextAppear 2s 1 linear forwards";
      }  

      if(myCar.style.left == "70%"){
        console.log("Board4 fade out");
        document.getElementById("C4").style.animation ="MakeTextDisappear 2s 1 linear forwards";
      }    

      if(myCar.style.left == "85%"){
        console.log("Board5 get in");
        document.getElementById("C5").style.animation ="MakeTextAppear 2s 1 linear forwards";
      }  

      if(myCar.style.left == "87%"){
        console.log("Board5 fade out");
        document.getElementById("C5").style.animation ="MakeTextDisappear 2s 1 linear forwards";
      }

      if(myCar.style.left == "89%"){
        console.log("Appear download box");
        document.getElementById("pop-up").style.animation = "popUpOpen 0.3s linear forwards";
        document.getElementById("sky1").style.backgroundBlendMode = "multiply";
        document.getElementById("TerminalWindow").style.opacity = "0%";
        document.getElementById("images").style.opacity="0%";
  
      }
  }


function moveLeft() {

  myCar.style.left = parseInt(myCar.style.left) - 1 +"%";
  if(myCar.style.left == 100- 2*myCar.style.width +"%"){
    console.log("reached corner");
  }
  if(myCar.style.left == "20%"){
    console.log("About me");
    document.getElementById("C1").style.animation ="MakeTextAppear 2s 1 linear forwards";
  }

  if(myCar.style.left == "10%"){
    console.log("About me fade out");
    document.getElementById("C1").style.animation ="MakeTextDisappear 2s 1 linear forwards";
  }     

  if(myCar.style.left == "30%"){
    console.log("Board2 get in");
    document.getElementById("C2").style.animation ="MakeTextAppear 2s 1 linear forwards";
  }     

  if(myCar.style.left == "26%"){
    console.log("Board2 fade out");
    document.getElementById("C2").style.animation ="MakeTextDisappear 2s 1 linear forwards";
  }     

  // if(myCar.style.left =="35%")
  // {
  //   document.getElementById("sky1").style.animation = "morningToEve 4s linear forwards";
  // }

  if(myCar.style.left == "50%"){
    console.log("Board3 get in");
    document.getElementById("C3").style.animation ="MakeTextAppear 2s 1 linear forwards";
  }  

  if(myCar.style.left == "45%"){
    console.log("Board3 fade out");
    document.getElementById("C3").style.animation ="MakeTextDisappear 2s 1 linear forwards";
  }     

  // if(myCar.animation.left == "55%"){
  //   document.getElementById("sky1").style.animation = "eveToNight 4s linear forwards";
  // }

  if(myCar.style.left == "70%"){
    console.log("Board4 get in");
    document.getElementById("C4").style.animation ="MakeTextAppear 2s 1 linear forwards";
  }  

  if(myCar.style.left == "65%"){
    console.log("Board4 fade out");
    document.getElementById("C4").style.animation ="MakeTextDisappear 2s 1 linear forwards";
  }    

  if(myCar.style.left == "87%"){
    console.log("Board5 get in");
    document.getElementById("C5").style.animation ="MakeTextAppear 2s 1 linear forwards";
  }  

  if(myCar.style.left == "85%"){
    console.log("Board5 fade out");
    document.getElementById("C5").style.animation ="MakeTextDisappear 2s 1 linear forwards";
  }    

  if(myCar.style.left == "87%"){
    console.log("Appear download box");
    document.getElementById("pop-up").style.animation = "popUpClose 0.3s linear forwards";
    document.getElementById("sky1").style.backgroundBlendMode = "normal";
    document.getElementById("TerminalWindow").style.opacity = "100%";
    document.getElementById("images").style.opacity="100%";

  }
}
  
  window.onload = init;
  console.log("initialised values");

  var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');