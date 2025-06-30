import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
// require('dotenv').config()
import {connectDB} from './db/index.js'
// const express = require('express')
// const mongoose = require('mongoose')
// const DB_Name = require('./constant.js')


connectDB()

// const app = express()







/*
THIS IS THE SECOND WAY IN THIS THERE ARE TWO WAYS DEFINED TO START A SERVER
const connectDB = async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on('Error: ',(error)=>{
            console.log("There is error connecting express to the database")
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(err){
        console.error("ERROR: ",err)
        throw err
    }

}

     */