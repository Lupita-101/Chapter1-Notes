const readline =(`readline-sync`);

let x = 8;
while(x<11){
    console.log (x);
    x++;
}

let y = 8;
while(y<11){
    console.log (y);
    y++;
}

let z = 10;
while (z>5){
    console.log(z);
    z--;
}

let w = 0;
while(w < 5){
    console.log(7);
    w++;
}

let start = 0;
while(start<= 100) {
   }  if (start> 25){
        console.log(start);
    }


//    start++;
//

let answer = readline.question("Enter y or n:");
while (answer!="y" && answer != "n"){
    console.log("invalid choice.")
    answer= readline.question("Try again, Enter y or n:");
}
console.log("reset of program");