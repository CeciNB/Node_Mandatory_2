const express = require('express')
const app = express()
const config = require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const skillsRouter = require('./routes/skills')
app.use(skillsRouter.router)

const projectsRouter = require('./routes/projects')
app.use(projectsRouter.router)

const recommendationsRouter = require('./routes/recommendations')
app.use(recommendationsRouter.router)
const certificatesRouter = require('./routes/certificates')
app.use(certificatesRouter.router)
const awardsRouter = require('./routes/awards')
app.use(awardsRouter.router)

const educationsRouter = require('./routes/educations')
app.use(educationsRouter.router)

const contactRouter = require('./routes/contact')
app.use(contactRouter.router)

const fs = require('fs')
const header = fs.readFileSync(__dirname + '/public/header/header.html', 'utf8')
const footer = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf8')
const frontPage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf8')
const skillsPage = fs.readFileSync(__dirname + '/public/skills/skills.html', 'utf8')
const projectsPage = fs.readFileSync(__dirname + '/public/projects/projects.html', 'utf8')
const recommendationsPage = fs.readFileSync(__dirname + '/public/recommendations/recommendations.html', 'utf8')
const educationsPage = fs.readFileSync(__dirname + '/public/educations/educations.html', 'utf8')
const contactPage = fs.readFileSync(__dirname + '/public/contact/contact.html', 'utf8')

function setNavActive(navItem) {
    return header.replace(`"nav-link" href="/${navItem}`, `"nav-link active" href="/${navItem}`)
}

app.get('/', (req, res) => {
    res.send(header + frontPage + footer)
})

app.get('/skills', (req, res) => {
    res.send(setNavActive('skills') + skillsPage + footer)
})

app.get('/recommendations', (req, res) => {
    res.send(setNavActive('recommendations') + recommendationsPage + footer)
})

app.get('/educations', (req, res) => {
    res.send(setNavActive('educations') + educationsPage + footer)
})

app.get('/projects', (req, res) => {
    res.send(setNavActive('projects') + projectsPage + footer)
})

app.get('/contact', (req, res) => {
    res.send(setNavActive('contact') + contactPage + footer)
})

const server = app.listen(process.env.PORT || 8080, (error) => {
    error ? console.log(error) : console.log('Server listening on port:', server.address().port)
})
