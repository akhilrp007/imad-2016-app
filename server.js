    var express = require('express');
     var morgan = require('morgan');
     var path = require('path');
     
     var app = express();
     app.use(morgan('combined'));
     
     var articles = {
       'article-one' : {
         title:'article-one',
         heading:'article-one',
         date:'oct 9 2016',
         content:` <p>
                       This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is
                    </p>
                    <p>
                       This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is 
        
                    </p>
                    <p>
                        This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is 
                    </p>`
         
     },
       'article-two':{ 
         title:'article-two',
         heading:'article-two',
         date:'oct 9 2016',
         content:` <p>
                       This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is
                    </p>
                    <p>
                       This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is 
        
                    </p>
                    <p>
                        This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is 
                    </p>`
         },
       'article-three':{
          title:'article-three',
         heading:'article-three',
         date:'oct 9 2016',
         content:` <p>
                       This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is
                    </p>
                    <p>
                       This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is 
        
                    </p>
                    <p>
                        This is first time in html.  This is first  in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is first time in html.  This is 
                    </p>`
         
     }
     };
     function createTemplate(data){
         var title= data.title;
         var date= data.date;
         var heading=data.heading;
         var content=data.content;
         var htmltemplate = `
         <html>
        <head>
            <title>
                ${title} 
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
           <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                    <div>
                         <a href="/">Home</a>
                    </div>
                    
                    <hr/>
                    <h3>
                       ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
        </body>
    </html>
     `;
     return htmltemplate;
     }
     
     
    app.get('/', function (req, res) {
       res.sendFile(path.join(__dirname, 'ui', 'index.html'));
     });
     
     var counter = 0;
     app.get('/counter',function(req,res){
         counter=counter+1;
         res.send(counter.toString());
     });
     
      var names = [];
     app.get('/submit-name', function (req,res){
         var name = req.query.name;
         names.push(name);
         res.send(JSON.stringify(names));
         
     });
     
     
     app.get('/:articleName',function(req,res){
         var articleName = req.params.articleName;
         res.send(createTemplate(articles[articleName]));
     });
     
     app.get('/article-two',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
     });
     
     app.get('/article-three',function(req,res){
         res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
     });
     
     
     
     app.get('/ui/style.css', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'style.css'));
     });
     
     app.get('/ui/main.js', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'main.js'));
     });
     
     
     app.get('/ui/madi.png', function (req, res) {
       res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
     });
     
    
     
     
     
     var port = 8080; // Use 8080 for local development because you might already have apache running on 80
     app.listen(8080, function () {
      console.log(`IMAD course app listening on port ${port}!`);
     });