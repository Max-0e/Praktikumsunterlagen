// frontend code

const ws = new WebSocket("ws://localhost:3000");


ws.onopen = () => { }
ws.onmessage = (message) => {
    if (message.data === 'success') {

    }
}

function login() {
    const input = document.getElementById('name');

    if (input.value.trim() !== '') {
        const data = {
            action: 'login',
            name: input.value
        }
        ws.send(JSON.stringify(data))
    }
}
