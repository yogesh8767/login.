const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (userMessage === '') return;

  // Add user message
  addMessage(userMessage, 'user');
  input.value = '';

  // Simulate bot response
  setTimeout(() => {
    const botResponse = getBotResponse(userMessage);
    addMessage(botResponse, 'bot');
  }, 600);
});

function addMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
  // Basic bot logic (can be replaced with AI)
  const msg = userInput.toLowerCase();
  if (msg.includes('hello')) return 'Hi there!';
  if (msg.includes('help')) return 'Sure, how can I assist you?';
  return "I'm just a simple bot. Try typing 'hello' or 'help'.";
}
