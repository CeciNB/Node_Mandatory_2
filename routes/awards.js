const router = require('express').Router()

/*
name: string,
date: string,
description: string,
*/

const awards = [
    {
        name: 'Coming soon',
    },
]

router.get('/api/awards', (req, res) => {
    res.send({ awards })
})

module.exports = {
    router,
}
