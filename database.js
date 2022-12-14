var sqlite3 = require('sqlite3').verbose()
 
var DBSOURCE = "./db/db.sqlite"
 
var db = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
     // Cannot open database
     console.error(err.message)
     throw err
   }else{
       console.log('Connected to the SQLite database.')
       db.run(`CREATE TABLE posts (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           title text,
           author text,
           body text
           )`,
           
       (err) => {
           if (err) {
               console.log("Table posts id already created:" + err.message)
           }else{
               console.log("Table posts is created")
           }
       });
     db.run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text,
        email text UNIQUE,
        password text,
        CONSTRAINT email_unique UNIQUE (email)
        )`,
        (err) => {
            if (err) {
                console.log("Table users id already created:" + err.message)
            }else{
                console.log("Table users is created")
            }
        });
    db.run(`CREATE TABLE coments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        postId INTEGER,
        author text,
        comment text  
        )`,
        (err) => {
            if (err) {
                console.log("Table coments id already created:" + err.message)
            }else{
                console.log("Table coments is created")
            }
        });        
       
   }
});


module.exports = db
