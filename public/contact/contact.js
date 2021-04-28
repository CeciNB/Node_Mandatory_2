/*//////////////////////
firstname: string,
lastname: 'string',
email: 'string',
support: 'string',
linkedInLink: string,
gitHubLink: string,
//////////////////////*/

;(async function getMe() {
    try {
        const response = await fetch('/api/me')
        const body = await response.json()
        const me = body.me

        const contactDiv = $('#contact')
        const meDiv = $('<div></div>').attr('class', 'col-md-8 mx-auto my-5')

        meDiv.append(
            $('<p></p>')
                .attr('class', 'lead')
                .text(me.firstname + ' ' + me.lastname),
        )
        meDiv.append($('<p></p>').attr('class', 'lead').text(me.email))
        meDiv.append(
            $('<a></a>')
                .attr({ href: me.linkedInLink, target: '_blank' })
                .append($('<img>').attr({ src: '/img/social/linkedin.png', class: 'social m-3' })),
        )
        meDiv.append(
            $('<a></a>')
                .attr({ href: me.gitHubLink, target: '_blank' })
                .append($('<img>').attr({ src: '/img/social/github.png', class: 'social m-3' })),
        )

        contactDiv.append(meDiv)
    } catch (error) {
        console.log(error)
    }
})()


async function myToast(){
    try {
        const response = await fetch('/api/con')
        const body = await response.json()
        
    } catch (error) {
        console.log(error)
    }

}