/*//////////////////////
Recommendations:
name: string,
quote: string,
email: string,
phone: string,

Certificates:
name: string,
date: string,
description: string,
grade: string,

Awards:
name: string,
date: string,
description: string,
//////////////////////*/

;(async function getRecommendations() {
    try {
        const response = await fetch('/api/recommendations')
        const body = await response.json()

        const recommendationsDiv = $('#recommendations')

        body.recommendations.map((recommendation) => {
            const recommendationDiv = $('<div></div>').attr('class', 'col-md-5 mx-auto my-5')

            recommendationDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(recommendation.name))
            recommendationDiv.append($('<p></p>').attr('class', 'lead').text(recommendation.quote))
            recommendationDiv.append($('<h5></h5>').text(`${recommendation.email} - ${recommendation.phone}`))

            recommendationsDiv.append(recommendationDiv)
        })
    } catch (error) {
        console.log(error)
    }
})()
;(async function getCertificates() {
    try {
        const response = await fetch('/api/certificates')
        const body = await response.json()

        const certificatesDiv = $('#certificates')

        body.certificates.map((certificate) => {
            const certificateDiv = $('<div></div>').attr('class', 'col-md-5 mx-auto my-5')

            certificateDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(certificate.name))
            certificateDiv.append($('<h5></h5>').text(certificate.date))
            certificateDiv.append($('<p></p>').attr('class', 'lead').text(certificate.description))
            certificateDiv.append($('<h2></h2>').text(certificate.grade))

            certificatesDiv.append(certificateDiv)
        })
    } catch (error) {
        console.log(error)
    }
})()
;(async function getawards() {
    try {
        const response = await fetch('/api/awards')
        const body = await response.json()

        const awardsDiv = $('#awards')

        body.awards.map((award) => {
            const awardDiv = $('<div></div>').attr('class', 'col-md-5 mx-auto my-5')

            awardDiv.append($('<h1></h1>').attr('class', 'display-4 fw-normal').text(award.name))
            awardDiv.append($('<h5></h5>').text(award.date))
            awardDiv.append($('<p></p>').attr('class', 'lead').text(award.description))

            awardsDiv.append(awardDiv)
        })
    } catch (error) {
        console.log(error)
    }
})()
