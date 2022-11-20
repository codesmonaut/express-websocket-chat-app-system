"use strict";

const messageContainer = document.getElementById(`message-container`);
const messageForm = document.getElementById(`message-form`);
const messageInput = document.getElementById(`message-input`);
const sendBtn = document.getElementById(`send-btn`);



// Create WebSocket connection
const socket = new WebSocket(`ws://localhost:3030`);

// Connection opened
socket.addEventListener(`open`, (e) => {
    console.log(`Connected to WebSocket Server.`);
})

// Listen for messages
socket.addEventListener(`message`, (e) => {
    
    const html = `
        <p>${e.data}</p>
    `;

    messageContainer.insertAdjacentHTML(`beforeend`, html);
})



const sendMessage = (e) => {
    e.preventDefault();

    const message = messageInput.value;
    
    socket.send(message);

    messageInput.value = ``;
}

messageForm.addEventListener(`submit`, sendMessage)