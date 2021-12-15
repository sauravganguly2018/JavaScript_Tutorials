console.log("This is tutorial 17 on events");

document.getElementById('heading').addEventListener('click',function(e){
    console.log("You have clicked on heading");
    let variable;
    // variable=e.target.className;
    // variable=e.target.classList;
    //    variable=Array.from(e.target.classList);
    //    variable=e.target.id;
    //       variable=e.offsetX;
    //     variable=e.offsetY;
    //     variable=e.clientX;
        // variable=e.clientY;
       console.log(variable);
    // location.href="//facebook.com";
});