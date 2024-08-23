let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl=document.getElementById("total-el")
let count = 0;
let Total=0;

function Incremnt(){
count+=1;
countEl.innerText=count;

}

function Save(){
    saveEl.innerText+=" " +count + " - ";
    Total+=count;
    count=0;
    countEl.innerText=0;

}

function total(){

totalEl.innerText= "Total People Entered Today:" +" "+ Total;


}