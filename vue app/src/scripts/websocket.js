/* eslint-disable */
//const ws = new WebSocket("ws://127.0.0.1:8083");
const ws = new WebSocket("ws://localhost:8083");
// fonction pour envoyer un message sur le socket
function sendWebSocketMessage(message) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message));
  }
}

// fonction pour recevoir des messages depuis le socket
function receiveWebSocketMessage(callback) {
  ws.onmessage = function (event) {
    //const data = JSON.parse(event.data);
    callback(event.data);
  };
}

// fonction pour fermer la connexion du socket
function closeWebSocketConnection() {
  ws.close();
}

export {sendWebSocketMessage, receiveWebSocketMessage, closeWebSocketConnection };
