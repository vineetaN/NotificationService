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



const axios = require("axios");

const mailer = () => {
  return {
    sendMail: async (mailData, callback) => {
      try {
        await axios.post(
          "https://api.brevo.com/v3/smtp/email",
          {
            sender: {
              name: "Movie Booking",
              email: process.env.EMAIL
            },
            to: mailData.to.map(email => ({ email })),
            subject: mailData.subject,
            textContent: mailData.text
          },
          {
            headers: {
              "api-key": process.env.BREVO_API_KEY,
              "Content-Type": "application/json"
            }
          }
        );

        callback(null, { message: "Email sent successfully" });

      } catch (error) {
        console.log("Brevo Error:", error.response?.data || error.message);
        callback(error, null);
      }
    }
  };
};

module.exports = mailer;
