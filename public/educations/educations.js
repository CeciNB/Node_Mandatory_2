/*//////////////////////
name: string,
institution: string,
explanation: string,
startDate: string,
endDate: string,
//////////////////////*/

;(async function getEducations() {
    try {
        const response = await fetch('/api/educations')
        const body = await response.json()

        const educationsDiv = $('#educations')

        body.educations.map((education) => {
            const educationWrapper = $('<div></div>').attr(
                'class',
                'position-relative overflow-hidden m-md-5 text-center border-top border-5',
            )
            const educationDiv = $('<div></div>').attr('class', 'col-md-8 mx-auto my-5')

            educationDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(education.name))
            educationDiv.append($('<h5></h5>').text(education.institution))
            educationDiv.append($('<p></p>').attr('class', 'lead m-2').text(education.explanation))
            educationDiv.append($('<h5></h5>').text(`${education.startDate} - ${education.endDate}`))
            educationWrapper.append(educationDiv)
            educationsDiv.append(educationWrapper)
        })
    } catch (error) {
        console.log(error)
    }
})()
