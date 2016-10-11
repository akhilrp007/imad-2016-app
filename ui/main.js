var button = document.getElementById('counter');
button.onclick = function() {
    
    //create request
    var request = new XMLHttpRequest();
    
    
    //capture the response and store it in a variable
    
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE)  {
          
          
          if (request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  };
    
    //make request
    request.open('GET','http://akhilrp007.imad.hasura-app.io/',true);
    request.send(null);
    
 
  
};