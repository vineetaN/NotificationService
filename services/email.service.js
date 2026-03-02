// const nodemailer = require("nodemailer");





// const mailer = (userId , password , mailData) => {
//   return nodemailer.createTransport({
//    service : "Gmail",
//    auth : {
//     user : userId,
//     pass : password
//    }
// });
   
// }


// module.exports = mailer

const nodemailer = require("nodemailer");

const mailer = (userId, password, mailData) => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: userId,
      pass: password
    }
  });
};

module.exports = mailer;