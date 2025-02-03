const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Display user's message
  const userDiv = document.createElement('div');
  userDiv.className = 'user-message';
  userDiv.textContent = userMessage;
  chatBox.appendChild(userDiv);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input field
  userInput.value = '';

  // Simulate bot response
  setTimeout(() => {
    const botResponse = getBotResponse(userMessage);
    const botDiv = document.createElement('div');
    botDiv.className = 'bot-message';
    botDiv.textContent = botResponse;
    chatBox.appendChild(botDiv);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000); // Delay for realism
}

function getBotResponse(message) {
  // Simple predefined responses in Kinyarwanda
  const responses = {
    'muraho': 'Muraho! Ni wewe ni we? Nk'ubutumwa bwange.',
    'ubumenyi': 'Ni mu gihe amakuru yawe?',
    'ubu': 'Nta muri buherere. Murakoze kugera!',
    'urakoze': 'Urakoze ko wowe! Ni wewe ni we?',
    'default': "Nta ndetse nizobona amakuru yawe. Murakoze!"
  };

  return responses[message.toLowerCase()] || responses['default'];
}
