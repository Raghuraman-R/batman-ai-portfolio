import { useState } from 'react'

export default function ChatBot({ open, setOpen }) {

  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'BATCOM AI ONLINE. Ask about Raghu’s portfolio.',
    },
  ])

  const handleSend = () => {

    if (!input.trim()) return

    const userMessage = {
      sender: 'user',
      text: input,
    }

    let botReply =
      'Sorry, I can only answer questions related to Raghu’s portfolio.'

    const lower = input.toLowerCase()

    if (lower.includes('project')) {
      botReply =
        'Raghu developed a Spider-Man Logo Generator and a Movie Recommendation System.'
    }

    else if (
      lower.includes('skill') ||
      lower.includes('technology')
    ) {
      botReply =
        'Raghu works with Python , HTML , CSS , Java Script , Java and C Programming.'
    }

    else if (
      lower.includes('education') ||
      lower.includes('study')
    ) {
      botReply =
        'Raghu is pursuing MCA specializing in Artificial Intelligence & Machine Learning.'
    }

    else if (
      lower.includes('contact') ||
      lower.includes('email')
    ) {
      botReply =
        'You can contact Raghu through GitHub or LinkedIn from the contact section.'
    }

    setMessages([
      ...messages,
      userMessage,
      {
        sender: 'bot',
        text: 'Typing...',
      },
    ])

    setInput('')

    setTimeout(() => {

      setMessages((prev) => [
        ...prev.slice(0, -1),

        {
          sender: 'bot',
          text: botReply,
        },
      ])

    }, 1200)
  }

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full md:w-[450px] bg-black/95 border-l border-yellow-500/20 z-50 transition-all duration-500 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >

      {/* HEADER */}
      <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">

        <h1 className="text-yellow-400 text-2xl font-bold">
          BATCOM AI
        </h1>

        <button
          onClick={() => setOpen(false)}
          className="text-white text-2xl"
        >
          ✕
        </button>

      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 h-[75vh]">

        {messages.map((msg, i) => (

          <div
            key={i}
            className={`max-w-[80%] p-4 rounded-2xl ${
              msg.sender === 'user'
                ? 'ml-auto bg-yellow-500 text-black'
                : 'bg-[#111] text-green-400 border border-green-500/20'
            }`}
          >
            {msg.text}
          </div>

        ))}

      </div>

      {/* INPUT */}
      <div className="absolute bottom-0 left-0 w-full p-6 border-t border-yellow-500/20 flex gap-4">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask BATCOM AI..."
          className="flex-1 bg-[#111] text-white px-4 py-3 rounded-xl outline-none border border-yellow-500/20"
        />

        <button
          onClick={handleSend}
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all"
        >
          Send
        </button>

      </div>

    </div>
  )
}