const exp=require("express")
const app=exp()

app.listen(3500,()=>console.log("web server listening on 3500"))

//get mongo client
const mclient=require('mongodb').MongoClient;

//connect db server using mongo client
mclient.connect("mongodb://127.0.0.1:27017")
.then(dbRef=>{
    //connect to database
    const talentconnectObj=dbRef.db('talentconnect')
    //connect to the collections
    const artistsCollectiontObj=talentconnectObj.collection('artistscollection')
    const storywritersCollectionObj=talentconnectObj.collection('storywriterscollection')
    const developersCollectionObj=talentconnectObj.collection('developerscollection')
    const usersCollectionObj=talentconnectObj.collection('userscollection')
    
    app.set(' artistsCollectiontObj', artistsCollectiontObj)
    app.set('storywritersCollectionObj',storywritersCollectionObj)
    app.set('developersCollectionObj',developersCollectionObj)
    app.set('usersCollectionObj',usersCollectionObj)

    console.log("DB Connection success")
})
.catch(err=>{
    console.log("database connect error",err)
})

const path=require("path") //import to connect the react
//connect react build
app.use(exp.static(path.join(__dirname,'./build')))

const userApp=require('./APIs/usersApi')

app.use('/users-api',userApp)

