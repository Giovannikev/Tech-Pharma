import { useState } from 'react'
import './chatBot.css'

function ChatBotPage() {

    interface Message {
        text: string;
        sender: 'user' | 'bot';
    }
  // State pour gérer les messages de l'utilisateur et du bot
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  // Fonction pour ajouter un message dans la discussion
  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Ajouter le message de l'utilisateur
    const userMessage: Message = { text: input, sender: 'user' };
    
    // Update messages using the spread operator
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Simuler une réponse du bot après une courte pause
    setTimeout(() => {
      const botMessage: Message = { text: "Je suis un bot, comment puis-je t'aider ?", sender: 'bot' };

      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);

    // Vider l'input après l'envoi
    setInput('');
  };

  return (
    <div className='chat__container' id='Chat'>

      <h2>Pharma Assistant</h2>

      <div className='chatWindow'>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(message.sender === 'user' ? styles.userMessage : styles.botMessage),
            }}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className='chat__inputContainer'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='chat__input'
          placeholder="Écris un message..."
        />
        <button onClick={handleSendMessage} className='chat__sendButton'>Envoyer</button>
      </div>
      
    </div>
  );
}



export default ChatBotPage;


const styles = {
message: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '70%',
    whiteSpace: 'break-word',
  },
  userMessage: {
    backgroundColor: '#4CC248',
    color: 'white',
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
  botMessage: {
    backgroundColor: '#e0e0e0',
    color: '#333',
    alignSelf: 'flex-start',
    marginRight: 'auto',
  },


}
