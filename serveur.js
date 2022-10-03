const express = require('express')
const app = express()


app.use(express.static(__dirname+'/public'))
app.use(express.json())



app.use('/views' , require('./routes/views'))

 

app.listen(5000,(err)=>{
    if(err) throw err
    else console.log('the serveur is working')
})