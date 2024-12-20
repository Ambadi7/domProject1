let btn = document.querySelector('#btn')
let head = document.querySelector('#head')

btn.addEventListener("click",()=>{
    if(btn.innerHTML==="Dark"){
        document.body.style.backgroundColor="black"
        btn.innerHTML ="Light"
        head.style.color="white"
        btn.style.color="black"
        btn.style.backgroundColor="white"
    
    }
    else{
     document.body.style.backgroundColor ="white"
     btn.innerHTML ="Dark"
     head.style.color="black"
     btn.style.color="white"
     btn.style.backgroundColor="black"
    }
})