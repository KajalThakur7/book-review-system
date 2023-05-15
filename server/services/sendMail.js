const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (email, otp) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "amr1313mk@gmail.com", // generated ethereal user
      pass: "oklbwlyjbieizdzp", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "amr1313mk@gmail.com",
    to: email,
    subject: "Welcome!",
    html: `Plese enter ${otp} to verify your email`,
  });
};

module.exports = sendMail;
