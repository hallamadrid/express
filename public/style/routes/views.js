const express = require('express')
const router = express.Router()
const path = require('path')



const authMiddleware = (req,res,next)=>{
    
    const  date_ob = new Date();
    const day =date_ob.getDay()
    const hours =date_ob.getHours();

    // const day=4
    // const hours= 19
    
            console.log(day,hours)
    if((day>1 && day<6)&&(hours>9 && hours <17)){
        console.log('middleware MRIGEL')
        next();
    }else{
        res.sendFile(path.join(__dirname,'../','public','error.html'))
    }
}


router.get('/',authMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','home-page.html'))
})
router.get('/contact',authMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','contact.html'))
})
router.get('/service',authMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','our-Services.html'))
})

module.exports=router