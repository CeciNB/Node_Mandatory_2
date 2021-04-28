const router = require('express').Router()
const nodemailer = require('nodemailer')

const me = {
    firstname: 'Cecilie',
    lastname: 'Brandt',
    nickname: 'CeciNB',
    email: 'ceci138p@stud.kea.dk',
    linkedInLink: 'https://www.linkedin.com/in/cecilie-nygaard-brandt/',
    gitHubLink: 'https://github.com/CeciNB',
}

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
})

router.get('/api/me', (req, res) => {
    res.send({ me })
})

router.post('/api/contact', (req, res) => {
    const email = req.body.email
    const subject = req.body.subject
    const body = req.body.body

    const options = {
        from: process.env.MAIL_USER,
        cc: email,
        to: me.email,
        subject: subject,
        text: body,
    }
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Message sent: ' + info.response)
        }
    })
    res.redirect('/contact')
})

router.get('/api/contact', (req, res) => {
    res.send({ message: 'woohoo' })
})

module.exports = {
    router,
}
