console.log("This is ajax tutorial");

let fetchButton=document.getElementById('fetchBtn');
fetchButton.addEventListener('click',handleButton);

function handleButton(){
    console.log("You have clicked the fetchBtn");

    //Instantiate an xhr object
    const xhr=new XMLHttpRequest();

    //open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1',true);

    // use this for post request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type','application/json')

    //what to do on progress(optional)
    xhr.onprogress=function(){
        console.log("on progress");
    }

    // xhr.onreadystatechange=function(){
    //     console.log("Ready state is ",xhr.readyState);
    // }

    //what to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }else{
            console.log("some error occured");
        }

    }

    //send the request
    let params=`{"name":"test11s","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done !");
}

let popButton=document.getElementById('popBtn');
popButton.addEventListener('click',handlepopButton);

function handlepopButton(){
    console.log("You have clicked the popBtn");

    //Instantiate an xhr object
    const xhr=new XMLHttpRequest();

    //open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    //what to do on progress(optional)
    xhr.onprogress=function(){
        console.log("on progress");
    }

    //what to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let str="";
            for(key in obj){
                str+=`<li>${obj[key]}</li>`;
            }
            document.getElementById('list').innerHTML=str;
        }else{
            console.log("some error occured");
        }

    }

    //send the request
    xhr.send();
    console.log("We are done !");
}

let fruits=document.getElementById('fruits');
fruits.addEventListener('click',handlefruits);

function handlefruits(){
    console.log("You have clicked the fruits");

    //Instantiate an xhr object
    const xhr=new XMLHttpRequest();

    //open the object
    xhr.open('GET','fruits.json',true);

    //what to do on progress(optional)
    xhr.onprogress=function(){
        console.log("on progress");
    }

    //what to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let str="";
            for(key in obj){
                str+=`<li>${obj[key]}</li>`;
            }
            document.getElementById('list').innerHTML=str;
        }else{
            console.log("some error occured");
        }

    }

    //send the request
    xhr.send();
    console.log("We are done !");
}


let vegetables=document.getElementById('vegetables');
vegetables.addEventListener('click',handlevegetables);

function handlevegetables(){
    console.log("You have clicked the vegetables");

    //Instantiate an xhr object
    const xhr=new XMLHttpRequest();

    //open the object
    xhr.open('GET','vegetables.json',true);

    //what to do on progress(optional)
    xhr.onprogress=function(){
        console.log("on progress");
    }

    //what to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let str="";
            for(key in obj){
                str+=`<li>${obj[key]}</li>`;
            }
            document.getElementById('list').innerHTML=str;
        }else{
            console.log("some error occured");
        }

    }

    //send the request
    xhr.send();
    console.log("We are done !");
}