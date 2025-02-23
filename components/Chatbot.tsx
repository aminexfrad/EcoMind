import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Bonjour! Comment puis-je vous aider?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim() === "") return;
    
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages([...newMessages, { text: "Je suis un chatbot simple!", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg p-4 mt-2">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-bold">Chatbot</h3>
            <button onClick={toggleChat} className="text-red-500">✖</button>
          </div>

          <div className="h-48 overflow-y-auto p-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex mt-2">
            <input
              type="text"
              className="flex-1 border p-2 rounded-l"
              placeholder="Écrivez un message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded-r">➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
