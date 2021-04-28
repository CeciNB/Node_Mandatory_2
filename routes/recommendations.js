const router = require('express').Router()

/*
name: string,
quote: string,
email: string,
phone: string,
*/

const recommendations = [
    {
        name: 'Banedanmark',
        quote: 'Flittig og professionel studentermedhjælper',
        email: 'gwht@bane.dk',
        phone: '91 39 97 70',
    },
]

router.get('/api/recommendations', (req, res) => {
    res.send({ recommendations })
})

module.exports = {
    router,
}
