var mysql = require('mysql');
var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "12345"  
});  

con.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");  
    con.query("CREATE DATABASE javatpoint", function (err, result) {  
        if (err) throw err;  
        console.log("Database created");  
    });  
}); 


// function login(){
//     let id = document.getElementById("id");
//     let pass = document.getElementById("pass");


// }