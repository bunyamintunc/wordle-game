const dizi =Array.from(document.querySelectorAll(".container div"));
const exit=document.querySelector(".info");
const arrayInput=document.querySelectorAll("input");
var enter=document.getElementById('enter');
enter.disabled=true;
let word="";
let count=0;
let strart=0;
let newRow=0;
wordArray=["ARBAT","AHMET","HASAN","ANKAR","SİVAS"]

function show(value){
    if(word.length<5){
        isGameOver();
        value=value.toUpperCase();
        word+=value;
        dizi[count].innerHTML=value;
        count++;
        
    }
    isLength();
  
}
function findLetter(){
    
    for(var i = 0; i<word.length; i++){
        for(j = 0; j<word.length; j++){
           if(wordArray[newRow].indexOf(word[j])!= -1){
               if(wordArray[newRow][i]==word[j] && i==j){
                   dizi[i+strart].className="green";
               }else{
                   if(dizi[i+strart].className !="green" )
                   dizi[i+strart].className="yellow";
               }
           }else if(wordArray[newRow].indexOf(word[j])==-1){
               dizi[j+strart].className="gray";
           }
          
        }
    }
    
    derle();
    
}


function derle(){
    
    strart=strart+5;
    newRow=newRow+1;
    word="";
}
function del(){
    
   char = word.slice(word.length-1)
   word=word.replace(char,"")
   dizi[count-1].innerHTML="";
   count=count-1;
}

function isLength(){
    if(word.length==5){
         enter.disabled=false;
    }else{
        enter.disabled=true;
    }
}

function play(){
    exit.className="info1";
}
function isGameOver(){
        if(count>24){
        alert("GAME OVER !!!")
        }
        
    }
