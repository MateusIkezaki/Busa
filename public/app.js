const send = document.getElementById('send')
const input = document.getElementById('input')
const name = document.getElementById('name')

send.addEventListener('click', async post => {
    const message = input.value
    const signed = name.value

    if(message != '' && signed != '')
    {
        const processeddata = {message, signed}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(processeddata)
        }

        const push = await fetch('/messages', options)
        alert('Mensagem mandada com sucesso! Muito obrigado pela contribuição :)')
    }
    else{
        alert('Either the message or the author´s name is missing')
    }
}) 