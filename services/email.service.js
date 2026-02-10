const nodemailer = require("nodemailer");





const sendMail = (userId , password) => {
  const transport = nodemailer.createTransport({
   service : "Gmail",
   auth : {
    user : userId,
    pass : password
   }
});
    transport.sendMail({
    from : "mba@support.com",
    to : "notificationservicebyvini@gmail.com",
    subject: "Test email for notification service",
    text : "Hey , this is a test email "
  
  })
}


module.exports = sendMail