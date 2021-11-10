function FizzBuzz() {
    let count = prompt("range: ");
    for(i=0;i<count;i++) {
        if(i % 3 == 0) {
            console.log("Fizz");
        } else if(i % 5 == 0) {
            console.log("Buzz");
        } else if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else {
            console.log(i);
        }
        
    }
    console.log("FizzBuzz completed")
}
while(true) {
    let playGame = prompt("Play FizzBuzz? y/n: ");
    if (playGame === "y") {
        FizzBuzz();
    } else if (playGame === "n") {
        console.log("okay, bye");
        stop(); 
        break;
    } else {
        console.log("invalid input, try again")
    };
};