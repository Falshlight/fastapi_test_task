var ws = new WebSocket("ws://localhost:8000/ws");
ws.onmessage = event => {
    const data = JSON.parse(event.data);
    let messages = document.getElementById('messages');
    let message = document.createElement('p');
    let content = document.createTextNode(data.number + ". " + data.message);
    message.appendChild(content);
    messages.appendChild(message);
};
function sendMessage() {
    let input = document.getElementById("textField");
    ws.send(JSON.stringify({message: input.value}));
    input.value = '';
    event.preventDefault();
}