const dizi =Array.from(document.querySelectorAll(".container div"));
const exit=document.querySelector(".info");
const arrayInput=document.querySelectorAll("input");
var enter=document.getElementById('enter');
enter.disabled=true;
let kelime="";
let sayac=0;
let basla=0;
let newRow=0;
kelimeAnahtar=["ARBAT","AHMET","HASAN","ANKAR","SİVAS"]

function goster(deger){
    deger=deger.toUpperCase();
    kelime+=deger;
    dizi[sayac].innerHTML=deger;
    sayac++;
    isLength();
}
function dene(){
    
    for(var i = 0; i<kelime.length; i++){
        for(j = 0; j<kelime.length; j++){
           if(kelimeAnahtar[newRow].indexOf(kelime[j])!= -1){
               if(kelimeAnahtar[newRow][i]==kelime[j] && i==j){
                   dizi[i+basla].className="green";
               }else{
                   if(dizi[i+basla].className !="green" )
                   dizi[i+basla].className="yellow";
               }
           }else if(kelimeAnahtar[newRow].indexOf(kelime[j])==-1){
               dizi[j+basla].className="gray";
           }
          
        }
    }
    
    derle();
    gameOver();
}


function derle(){

    basla=basla+5;
    newRow=newRow+1;
    kelime="";
}
function del(){
    
   char = kelime.slice(kelime.length-1)
   kelime=kelime.replace(char,"")
   dizi[sayac-1].innerHTML="";
   sayac=sayac-1;
}

function isLength(){
    if(kelime.length==5){
         enter.disabled=false;
    }else{
        enter.disabled=true;
    }
}

function play(){
    exit.className="info1";
}
function gameOver(){
    if(sayac>=24){
        alert("GAME OVER !!!")
        arrayInput.disabled=false;
    }
}