const express = require('express')
const app = express()


app.use(express.static(__dirname+'/public'))
// app.get('/',(req,res) =>{
//     res.sendFile(__dirname + '/public/home.html')
// })
// app.get('/contact',(req,res) =>{
//     res.sendFile(__dirname + '/public/contact.html')
// })
// app.get('/services',(req,res)=> {
//     res.sendFile(__dirname + '/public/services.html')
// })

app.use('/views',require('./routes/view'))



app.listen(5000,(err) =>{
if (err) throw err
else console.log('server is running on  port 5000')
})