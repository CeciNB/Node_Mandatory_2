const router = require('express').Router()

/*
title: string
description: string
image?: string | null
startDate: string
endDate?: string | null
gitLink?: string | null
hostedLink?: string | null
*/

const projects = [
    {
        title: 'Isolation Help',
        description:
            'Made for elective Mobile Dev. at KEA - iOS app. Idea: a platform to connect people while in isolation with volunteers who can help with things like walking a dog or picking up packages.',
        image: null,
        startDate: new Date('2021-03-22').toLocaleDateString(),
        endDate: new Date('2021-04-09').toLocaleDateString(),
        gitLink: 'https://www.dropbox.com/sh/igdnt5k2wtup1d1/AAC-q7-sAxXQYYSYOmcp-gT6a?dl=0',
        hostedLink: 'https://youtu.be/GhhJkSILsMM',
    },
    {
        title: 'Nodedocumentation',
        description: 'Made for elective Fullstack Node.js at KEA - containing good stuff',
        image: null,
        startDate: new Date('2021-03-11').toLocaleDateString(),
        endDate: new Date('2021-03-24').toLocaleDateString(),
        gitLink: 'https://github.com/CeciNB/Node_Mandatory_1',
        hostedLink: null,
    },
    {
        title: 'Nodefolio',
        description: 'Made for elective Fullstack Node.js at KEA - good stuff about me',
        image: '/img/logo/logo-dark.png',
        startDate: new Date('2021-04-15').toLocaleDateString(),
        endDate: new Date('2021-05-09').toLocaleDateString(),
        gitLink: 'https://github.com/CeciNB/Node_Mandatory_2',
        hostedLink: null,
    },
]

router.get('/api/projects', (req, res) => {
    res.send({ projects })
})

module.exports = {
    router,
}
