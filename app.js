const { text } = require('express');
const nodemailer = require('nodemailer');
const{password}=require('./env')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
    user: "vyasnair001@gmail.com",
        pass: password
}
});

const options={
    from:"vyasnair001@gmail.com",
    to:"carlowvyas@gmail.com",
    subject:"sent via NODEMAILER",
    text:"Nodemailer is working"
    }
    transporter.sendMail(options, function (err,info){
if (err){
    console.log(err)
    return;
}
console.log("Sent: " +info.response);
    })