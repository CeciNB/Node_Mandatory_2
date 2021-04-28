/*//////////////////////////
title: string
description: string
image?: string | null
startDate: string
endDate?: string | null
gitLink?: string | null
hostedLink?: string | null
//////////////////////////*/

;(async function getProjects() {
    try {
        const response = await fetch('/api/projects')
        const body = await response.json()

        const projectsDiv = $('#projects')

        body.projects.map((project) => {
            const projectWrapper = $('<div></div>').attr('class', 'position-relative overflow-hidden m-md-5 text-center border-top border-5')
            const projectDiv = $('<div></div>').attr('class', 'col-md-5 mx-auto my-5')

            projectDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(project.title))
            projectDiv.append($('<h2></h2>').text(`${project.startDate} - ${project.endDate ? project.endDate : 'In progress'}`))
            projectDiv.append($('<p></p>').attr('class', 'lead m-3').text(project.description))

            if (project.gitLink !== null) {
                projectDiv.append($('<h1></h1>').append($('<a></a>').attr('href', project.gitLink).text('Link to code')))
            }
            if (project.hostedLink !== null) {
                projectDiv.append($('<h1></h1>').append($('<a></a>').attr('href', project.hostedLink).text('Link to see')))
            }
            if (project.image !== null) {
                projectDiv.append(
                    $('<div></div>').append(
                        $('<img/>').attr({
                            src: project.image,
                            class: 'img-fluid proj-img',
                        }),
                    ),
                )
            }
            projectWrapper.append(projectDiv)
            projectsDiv.append(projectWrapper)
        })
    } catch (error) {
        console.log(error)
    }
})()
