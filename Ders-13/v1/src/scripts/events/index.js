const eventEmitter = require("./eventEmitter");
const nodemailer = require("nodemailer");

module.exports = () => {
  eventEmitter.on("send_email", async (emailData) => {
    // let transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.EMAIL_USER, // generated ethereal user
    //     pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    //   },
    // });

    // let info = await transporter.sendMail({
    //   from: process.env.EMAIL_FROM, // sender address
    //   ...emailData
    // });
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      ...emailData,
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
