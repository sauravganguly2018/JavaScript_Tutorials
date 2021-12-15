console.log("This is tutorial 18");
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);
function func1(e){
    console.log("Thanks",e);
    e.preventDefault();
}
function func2(e){
    console.log("Thanks it's a double click ",e);
    e.preventDefault();
}
function func3(e){
    console.log("Thanks it's a mouse down",e);
    e.preventDefault();
}
document.querySelector('.no').addEventListener('mouseenter',function(e){
    console.log("you entered no");
})
document.querySelector('.no').addEventListener('mouseleave',function(e){
    console.log("you exited no");
})
document.querySelector('.container').addEventListener('mousemove',function(e){
   
    console.log("you triggered mousemove event");
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetY+e.offsetX})`

})

