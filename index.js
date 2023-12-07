let mail=document.getElementById("mail");
let error=document.getElementById("error");
let submit=document.getElementById("submit");
let form=document.getElementById("form");


submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!mail.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.+[com]+$/)){
        error.style.display="block";
        mail.style.borderColor="hsl(4, 100%, 67%)";
        mail.addEventListener('click',function (e){
            error.style.display="none";
            mailBox.style.borderColor="grey";
        })
    }else{
        error.style.display="none";
        mail.style.borderColor="grey";
    }
})
