const router = require('express').Router()

/*
name: string,
institution: string,
explanation: string,
startDate: string,
endDate: string,
*/

const educations = [
    {
        name: 'AP Computer Science',
        institution: 'KEA - Københavns Erhvervsakademi',
        explanation: 'Software Delevopment',
        startDate: 'August 2019',
        endDate: 'January 2022',
    },
    {
        name: 'Medialogy (BSc)',
        institution: 'Aalborg Universitet',
        explanation: 'NB: 3 semesters',
        startDate: 'August 2015',
        endDate: 'December 2017',
    },
    {
        name: 'STX',
        institution: 'Gefion Gymnasium',
        explanation: 'MAT A, KEM A, ENG A',
        startDate: 'August 2011',
        endDate: 'Juni 2014',
    },
]

router.get('/api/educations', (req, res) => {
    res.send({ educations })
})

module.exports = {
    router,
}
