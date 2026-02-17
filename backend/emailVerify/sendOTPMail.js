import nodemailer from "nodemailer";
import "dotenv/config";


const sentOTPMail= async(otp, email) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailDetails = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Email Verification",
    html :`<p> Your otp to reset the password is : <b>${otp}</b></p>`
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("otp sent successfully");
      console.log(data);
    }
  });
};
export default sentOTPMail;