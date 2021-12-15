console.log("Tutorial 21 exercise 2 JavaScript")
/*
you have to craete a div and inject it into the page which contains a 
heading .
whenever someone clicks on the div , It should convert into an editable 
item.whenever user clicks away (blur).save the note into the local storage.

*/

let divElem=document.createElement('div');
divElem.setAttribute('id','elem');
divElem.setAttribute('style','width:400px; border:2px solid black; margin:10px; padding:10px');

let val=localStorage.getItem('text');
let text;
if (val==null){
     text=document.createTextNode("I am Saurav Ganguly . You can give me any challenge");
}
else{
     text=document.createTextNode(val);
}
divElem.appendChild(text);

let container=document.querySelector('.container');
let first=document.getElementById('myfirst');

container.insertBefore(divElem,first);
console.log(container,divElem,first);

divElem.addEventListener('click',function(e){
    let noTextarea=document.getElementsByClassName('textarea').length;
    if(noTextarea==0){
        let html=divElem.innerHTML;
        divElem.innerHTML=`<textarea class="textarea" id="textarea">${html}</textarea>`;
    }
    // Listen for the blur event on textarea

    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.value;
        localStorage.setItem('text',textarea.value);
    })
   
})