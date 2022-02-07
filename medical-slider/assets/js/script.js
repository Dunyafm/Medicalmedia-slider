let leftIcon = document.getElementById("left-btn");
let rightIcon = document.getElementById("right-btn");
let Icon = document.getElementById("click-active");

// let just = Icon.getElementsByClassName("active");
let active = document.getElementById("active");

let right=()=> {
    let endRight=document.getElementById("10");
    
    if (just[0]!=endRight) {
      Icon.append(just[0]);
      
      
    }else{
      rightIcon.style.color="darkblue";
    }
    
  
  }
  let left=()=>{
    let endLeft= document.getElementById("1")
    if (just[just.length-1]!=endLeft) {
      Icon.prepend(just[just.length-1]);
    }else{
      leftIcon.style.color="blue"
    }
    
  }