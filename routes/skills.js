const router = require('express').Router()

/*
title: string
explanation: string
progress: 0<number>100
*/

const skills = [
    {
        title: 'Node.js',
        explanation: 'Runtime enviorment for building Web apps - Fullstack',
        progress: 40,
    },
    {
        title: 'Swift',
        explanation: 'Language for building iOS Mobile apps - Fullstack',
        progress: 90,
    },
    {
        title: 'Angular',
        explanation: 'Component-based framework for building Web apps - Frontend',
        progress: 60,
    },
    {
        title: 'Piano',
        explanation: 'Classical - Modern',
        progress: 60,
    },
    {
        title: 'Guitar',
        explanation: 'Classical - Modern',
        progress: 75,
    },
    {
        title: 'Saxofon',
        explanation: 'Just begun',
        progress: 10,
    },
    {
        title: 'Java',
        explanation: 'Object oriented, open source, WORA - Fullstack',
        progress: 75,
    },
    {
        title: 'SQL (MySQL, PostgrSQL)',
        explanation: 'Relational database language - Backend',
        progress: 90,
    },
    {
        title: 'NoSQL (MongoDB, Firebase)',
        explanation: 'Document oriented language - Backend',
        progress: 75,
    },
    {
        title: 'Cloud storage (AWS, Google Cloud)',
        explanation: '',
        progress: 30,
    },
    {
        title: 'CIDI (CircleCI, Jenkins)',
        explanation: '',
        progress: 70,
    },
    {
        title: 'Docker',
        explanation: '',
        progress: 80,
    },
]

router.get('/api/skills', (req, res) => {
    res.send({ skills })
})

module.exports = {
    router,
}
