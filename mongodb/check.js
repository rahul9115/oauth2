const MongoClient = require('mongodb').MongoClient;
const pass=require("../services/passport");
const uri = "mongodb+srv://rahul:rahul@cluster0.rpfjy.mongodb.net/<dbname>?retryWrites=true&w=majority";
const passport=require("passport");
module.exports =(myobj)=>{ 
  MongoClient.connect(uri, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("mongo");
  $exists=false;
  var collection=dbo.collection("customers");
  
  var value=collection.find(myobj);
  
value.count(function (err, num) {
    if(err) {
       throw err;
    }
    console.log(num);

  
            if(num>0) //if it does
            {
                console.log("Already present"); // print out what it sends back
                 collection.findOne(myobj,(err,data)=>{
                   if(err) {
                    throw err;
                   }
                  
                 
            });
            }
            if(num===0) // if it does not 
            {
                dbo.collection("customers").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                done
                db.close();
              });
        
            }
            collection.findOne(myobj,(err,data)=>{
                   if(err) {
                    throw err;
                   }
                   console.log(data._id);
                   done(null,data);
                  var id=data._id;
                  
                  
                
            });
            
            }); 
                                        
                
            
 
    });
  
}