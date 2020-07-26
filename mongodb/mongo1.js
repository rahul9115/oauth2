const MongoClient= require("mongodb").MongoClient;
const uri = "mongodb+srv://rahul9115:nanaamma@cluster0-d6yk7.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
module.exports=(myobj)=>{
    client.connect(err=>{
        if (err) throw err;
        const collection = client.db("mongo").collection("customers");
        collection.find((myobj,{$exists:true}),(err,doc)=>{
            if (doc){
                console.log("User already exists");

            }
            else{
                collection.collection("customers").insertOne(myobj,function (err,res) {
                if (err) throw err;
                console.log("value inserted");
                db.close();    
                });
            }
        });
    });
}