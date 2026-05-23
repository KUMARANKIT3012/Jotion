"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!input) return;

    setLoading(true);

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const response = await fetch("/api/chat", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: input,
      }),
    });

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      data,
    ]);

    setInput("");

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed
          bottom-5
          right-5
          z-50
          bg-black
          text-white
          p-4
          rounded-full
          shadow-lg
          hover:scale-105
          transition
        "
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Popup */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-20
            right-5
            z-50

            w-[95vw]
            sm:w-[400px]

            h-[70vh]

            bg-white
            dark:bg-neutral-900

            border
            rounded-2xl

            shadow-2xl

            flex
            flex-col

            overflow-hidden
          "
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between

              p-4
              border-b
            "
          >
            <h2 className="font-bold text-lg">
              AI Assistant
            </h2>

            <button
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
          </div>

          {/* Messages */}

          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              space-y-3
            "
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  p-3
                  rounded-xl
                  text-sm
                  whitespace-pre-wrap

                  ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white ml-auto max-w-[85%]"
                      : "bg-neutral-200 dark:bg-neutral-800 max-w-[85%]"
                  }
                `}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div
                className="
                  bg-neutral-200
                  dark:bg-neutral-800
                  p-3
                  rounded-xl
                  w-fit
                "
              >
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}

          <div
            className="
              p-4
              border-t
              flex
              gap-2
            "
          >
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Ask AI..."
              className="
                flex-1
                border
                rounded-xl
                px-4
                py-2
                bg-transparent
                outline-none
              "
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="
                bg-black
                text-white
                px-4
                rounded-xl
              "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};