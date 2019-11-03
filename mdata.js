var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kelo986:Kelo#986@kdtech-shaev.mongodb.net/test?retryWrites=true&w=majority");
var conn = mongoose.connection;

var TestSchema = mongoose.Schema({
    _id:Number,
    name:String,
    from:String,
    case:String,
    date:Date
});
var Client = mongoose.model('testschema',TestSchema);
var firstClient = new Client({_id:1, name: "Divyanshi", from:"Nahar", case:"Test", date: new Date()})

conn.on('connected', function(){
    console.log('Successfully connected!!!');
});
conn.on('disconnected', function(){
    console.log('Successfully disconnected!!!');
})
conn.on('error', function(){
    console.error.bind(console, "error detected!!!");
});
conn.once('open', function(){
    firstClient.save(function(err, res){
        if(err) throw err;
        console.log(res);
        conn.close();
    });
    
})