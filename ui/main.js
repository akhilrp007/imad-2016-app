console.log('Loaded!');
var element = document.getElementById('main');
element.innerHTML='New ca';
 
 
 var img = document.getElementById('main');
 
 var img = document.getElementById('madi');
 var marginLeft=0;
function moveRight(){
     marginLeft=marginLeft+10;
     img.style.marginLeft=marginLeft+'px';
 }
 img.onclick=function(){
     //img.style.marginLeft='100px';
     var interval = setInterval(moveRight,100);
 };