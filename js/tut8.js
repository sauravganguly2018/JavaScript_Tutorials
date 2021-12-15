console.log("This is tutorial8.js");
const age=28;
if(age!=18){
    console.log("Your age is not 18");
}
if(age!==30){
    console.log("Your age is not 30");
}
else {
    console.log("Your age is not 18");
}

// const vari=98;
if(typeof vari!=='undefined'){
    console.log("vari is defined")
}
else{
    console.log("vari is undefined ")
}
let doesdrive=true;
if(doesdrive || age>=18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}
console.log(age==18? 'Your age is 18' : 'Your age is not 18')

switch (age) {
    case 18:
        console.log("Your age is 18");
        break;
    case 28:
        console.log("Your age is 28");
        break;
    case 38:
        console.log("Your age is 38");
        break;    
    default:
        console.log("You are not in any case");
        break;
}