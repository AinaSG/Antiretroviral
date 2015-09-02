// ==UserScript==
// @name        Antiretroviral
// @namespace   AinaSG
// @description Tratamiento para el SIDA de Youtube
// @include     *youtube.com/*
// @exclude     *my_videos*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

//filtre
function filter(jNode) {
    try{
        var temp = jNode[0];
        var cancer = temp.innerHTML; //Agafem el cancer que pugui haber dins de l'element carregat
      
        if(censors.indexOf(cancer.trim().toLowerCase()) != -1){ //Si existeix aquest cancer dins la llista de censures
            temp = temp.parentNode;
            for (var a=0; a<15; a++) {
                if(temp == null) {break;}
                temp = temp.parentNode;
                
                if(temp.tagName == "LI") {
                    if(temp.parentNode != null) {
                    temp.parentNode.removeChild(temp);
                    }
                    break;	
                }
                
                
                if(temp.id == "watch7-main") {
                    if(blockvideo == true){
                         var temptemp = temp.parentNode;
                        if(temptemp != null) {
                         temptemp.removeChild(temp);
                        }
                        $( "#player" ).remove(); //Eliminem el plyer
                        temptemp.innerHTML="<div align='center'><p style='font-size:16px'>Video subido por "+cancer+" y por lo tanto bloqueado... De nada.</p></div>"; //Mostrem un missatge
                    }
                    break;
                }
                
                
            }
        }
    } 
   catch(e) {}
}


////// EDITAR AQUÍ ///////////////////////////////////////////////////////////////////////////////////
//   Llista de usuarios a bloquear, separados por comas sin espacios
//var blocks = "PewDiePie,elrubiusOMG"
//He precargado la lista con algunas de mis preferencias, modificar a gusto.
var blocks = "PewDiePie,elrubiusOMG,VEGETTA777,DalasReview,Wismichu,Míster Jägger,AuronPlay"
/////////////////////////////////////////////////////////////////////////////////////////////////////



//Inhabilitar amb false, nomes per testejar
var blockvideo = true
var censors = blocks.split(",");


//Fotmatejem
for (var i = 0; i < censors.length; i++) {
    censors[i] = censors[i].trim().toLowerCase();
}

//Per a cada element, es passa filtre
waitForKeyElements('.g-hovercard', filter);
waitForKeyElements('.yt-user-name', filter);
waitForKeyElements('.qualified-channel-title', filter);
waitForKeyElements('.qualified-channel-title-text', filter);
waitForKeyElements('.shelf-title', filter);
waitForKeyElements('.yt-uix-sessionlink', filter);


