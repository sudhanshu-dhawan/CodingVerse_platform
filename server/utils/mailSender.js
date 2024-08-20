const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                 secure: true,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })


            // let info = await transporter.sendMail({
            //     from: 'StudyNotion || CodeHelp - by Babbar',
            //     to:`${email}`,
            //     subject: `${title}`,
            //     html: `${body}`,
            // })
            // console.log(info);
            // return info;
            const mailOptions = {
                from: 'still9562@gmail.com',
                to: `${email}`,
                subject: `${title}`,
                html: `${body}`,
            };
        
    try {
            return await transporter.sendMail(mailOptions);
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;