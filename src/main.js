const socket = io('http://localhost:3000');

const messages = document.getElementById('messages');
const msgForm = document.getElementById('input-form');
const msgInput = msgForm.getElementsByTagName('input')[0];
const joinForm = document.getElementById('join-form');
const usernameInput = joinForm.getElementsByTagName('input')[0];
const room1 = document.getElementById('room1');
const room2 = document.getElementById('room2');
const room3 = document.getElementById('room3');
document.getElementById('chat').classList = 'hidden';
room1.classList = 'hidden';
room2.classList = 'hidden';
room3.classList = 'hidden';


room1.addEventListener('click', () => {
  socket.emit('joinRoom', 'room1');
  console.log('moi');
});
room2.addEventListener('click', () => {
  socket.emit('joinRoom', 'room2');
  console.log('hei');
});
room3.addEventListener('click', () => {
  socket.emit('joinRoom', 'room3');
  console.log('heippa');
});
msgForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (msgInput.value) {
      socket.emit('chat message', msgInput.value);
      msgInput.value = '';
    }
  });
  
  joinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (usernameInput.value) {
      socket.emit('join', usernameInput.value);
      socket.emit('joinRoom', 'room1');
      usernameInput.value = '';
      document.getElementById('login').classList = 'hidden';
      document.getElementById('chat').classList = '';
      room1.classList = 'hover:bg-gm-beige hover:text-gm-black rounded-md';
      room2.classList = 'hover:bg-gm-beige hover:text-gm-black rounded-md';
      room3.classList = 'hover:bg-gm-beige hover:text-gm-black rounded-md';
      
      msgInput.focus();
    }
  });

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = msg;
  document.getElementById('messages').appendChild(item);
});