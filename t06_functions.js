/****************************
This is a block comment.
Put your header comment here!
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
console.log("Running t01_introduction.js")
console.log("Insert your message here!")
let username = "victor"
let year = "2067"
let age = 15;
let blaw = "10"
let money = 10;
let birth = year - age
let newAge = age + 10;
let cashsh = money / 2
let bruh = cashsh + 3
function welcome(){
    OUTPUT.innerHTML += ("<h1> hello </h1> ")
}

// This is a single line comment
welcome()
OUTPUT.innerHTML = ("<p> wsp, "+ username + " as of "+ year +" you are "+ age + " your so rich and famous I wanna be JUST like you when I grow up </p>" )
OUTPUT.innerHTML += ("<p> You were born in " + birth + "</p>")
OUTPUT.innerHTML += ("<p> in 10 years you will be " + newAge + "</p>")
OUTPUT.innerHTML += ("<p> you have " + money + "dollar </p>")
OUTPUT.innerHTML += ("<p>half of your money is" + cashsh + "</p>")
OUTPUT.innerHTML += ("<p> +3 = " + bruh + "</p>")
OUTPUT.innerHTML += ("<p>" + username +": Ladies ladies, stand back, one at a time!, I know I know, I'm so graet B) </p>")
