;(async function getInfo() {
    const response = await fetch('/api/me')
    const body = await response.json()
    const me = body.me

    $('#footer-name').text(me.firstname + ' ' + me.lastname)
    $('#footer-copyright').text(`Copyright © ${new Date().getFullYear()} ${me.nickname}`)
    $('#footer-email').text(me.email)
})()
