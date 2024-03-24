document.getElementById("concatenate").onclick = function () {
    let massage = "Good day"
    let firstName = "talha"
    console.log (massage + firstName)
    document.getElementById("output").innerHTML = massage + " " + firstName
}

document.getElementById("askname").onclick = function () {
 let massage = "Good day"
 let firstName = prompt ("Enter your first Name")
 let lastName = prompt ("Enter your last Name")
 let banger = "!";
 console.log (massage + firstName + lastName + banger)
 document.getElementById ("output").innerHTML = massage + " " + firstName + " "  + lastName + banger ;
 
}
document.getElementById("comparison"). onclick = function () {
var num1 = 15
var num2 = 15
if(num1 === num2){
   alert("yes your condition is true.The 15 = 15")
}else{
  alert("no your condition is false.The 14 >= 15")
}

}
 
document.getElementById("ifelseif"). onclick = function (){
    var num1 = 15
    var num2 = 15
    console.log (num1 + num2)
    if(num1 !== num2){
     console.log("no your first condition is false")
    }else if(num1 === num2){
     console.log("yes your condition is true")
    }else if(num1 > num2){
        console.log("no your condition is false")
    }
}

document.getElementById("testingsets"). onclick = function (){
 var age = +prompt(" your age")
 var weight = +prompt("your weight");


 if(age >= 18 && weight <= 70){
 console.log("you're a smart gay")


 }else if(age >= 15 && weight > 60){
 console.log("you're a fat gay")
 
}else
  console.log("you're a baby")


}


document.getElementById("ifstatement"). onclick = function (){
let age = +prompt("your age")
if (age >= 18 ){
    let weight = +prompt ("your weight")
        if(weight <= 70){
            console.log("you're a smart boy")
        }else{
            console.log("you're a fat guy")
        }
    }else{
        console.log("you're a baby")
    }
}


document.getElementById("login").onclick =  function () {
    var userName = +prompt ("your user name")
    var pass = +prompt ("your password")
    if (userName === "talha" && pass === "123"){
      console.log("User logged in")
    }
 else{
     console.log("User name or password incorret")
}




}


