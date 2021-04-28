const router = require('express').Router()

/*
name: string,
date: string,
description: string,
grade: string,
*/

const certificates = [
    {
        name: 'TOEFL iBT® Test',
        date: new Date('2013-10-06').toLocaleDateString(),
        description: `The world's premier English-language test for university study, work and immigration.`,
        grade: 'Score: 111',
    },
    {
        name: 'EBS Graduate',
        date: new Date('2015-03-30').toLocaleDateString(),
        description: 'EBS - European Bartender School',
        grade: 'Flair: A - Mixing: A - History: A',
    },
]

router.get('/api/certificates', (req, res) => {
    res.send({ certificates })
})

module.exports = {
    router,
}
