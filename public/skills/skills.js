/*//////////////////////
title: string 
explanation: string 
progress: 0<number>100 
//////////////////////*/

;(async function getSkills() {
    try {
        const response = await fetch('/api/skills')
        const body = await response.json()

        const skillsDiv = $('#skills')

        body.skills.map((skill) => {
            const skillWrapper = $('<div></div>').attr('class', 'position-relative overflow-hidden m-md-5 text-center border-top border-5') //dark-content?
            const skillDiv = $('<div></div>').attr('class', 'col-md-8 mx-auto my-5')

            skillDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(skill.title))
            skillDiv.append($('<p></p>').attr('class', 'lead').text(skill.explanation))

            if (0 < skill.progress < 100) {
                // TODO: handle this possible error
                skillDiv.append(
                    $('<div></div>')
                        .attr('class', 'progress')
                        .append(
                            $('<div></div>')
                                .attr({
                                    class: 'progress-bar',
                                    role: 'progressbar',
                                    style: `width: ${skill.progress}%`,
                                })
                                .text(`${skill.progress}%`),
                        ),
                )
            }
            skillWrapper.append(skillDiv)
            skillsDiv.append(skillWrapper)
        })
    } catch (error) {
        console.log(error)
    }
})()
