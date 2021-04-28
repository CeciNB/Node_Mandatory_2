;(async function getSkills() {
    try {
        const response = await fetch('/api/skills')
        const body = await response.json()

        const skillsDiv = $('#carousel-skills')

        body.skills.map((skill) => {
            const skillDiv = $('<div></div>').attr('class', 'carousel-item')
            skillDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(skill.title))
            skillsDiv.append(skillDiv)
        })
    } catch (error) {
        console.log(error)
    }
})()
;(async function getProjects() {
    try {
        const response = await fetch('/api/projects')
        const body = await response.json()

        const projectsDiv = $('#carousel-projects')

        body.projects.map((project) => {
            const projectDiv = $('<div></div>').attr('class', 'carousel-item')
            projectDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(project.title))
            projectsDiv.append(projectDiv)
        })
    } catch (error) {
        console.log(error)
    }
})()
;(async function getRecommendations() {
    try {
        const response = await fetch('/api/recommendations')
        const body = await response.json()

        const recommendationsDiv = $('#carousel-recommendations')

        body.recommendations.map((recommendation) => {
            const recommendationDiv = $('<div></div>').attr('class', 'carousel-item')
            recommendationDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(recommendation.name))
            recommendationsDiv.append(recommendationDiv)
        })
    } catch (error) {
        console.log(error)
    }
})()
