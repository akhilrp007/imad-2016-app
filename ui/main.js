console.log('Loaded!');
var element = document.getElementById('main');
element.innerHTML='New ca';
 
 
 var img = document.getElementById('main');
 
 var img = document.getElementById('madi');
 var marginleft=0;
 function moveRight(){
     marginleft=marginleft+1220;
     img.style.marginleft=marginleft+'px';
 }
 img.onclick=function(){
     var interval = setInterval(moveRight,100);
 }