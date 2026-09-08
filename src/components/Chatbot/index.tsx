import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../context/LanguageContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasWelcomed = useRef(false);

  useEffect(() => {
    if (isOpen && !hasWelcomed.current) {
      hasWelcomed.current = true;
      setMessages([{ role: 'assistant', content: t('chatbot.welcome') }]);
    }
  }, [isOpen, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, language }),
      });

      const data = await res.json() as { reply?: string; error?: string };

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply ?? t('chatbot.error') },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: t('chatbot.error') },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 font-[JetBrainsMono] flex flex-col items-end gap-3">
      {/* Chat Panel */}
      {isOpen && (
        <div className="w-80 md:w-96 flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 border border-green-400/30 rounded-2xl shadow-2xl shadow-green-500/10 animate-fade-in overflow-hidden"
          style={{ maxHeight: 'min(520px, calc(100vh - 120px))' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-green-400/20 bg-slate-900/60">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-green-400/20 border border-green-400/50 flex items-center justify-center">
                <Bot size={14} className="text-green-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-green-400">WO · AI</p>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-gray-400">online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white hover:bg-slate-700 p-1 rounded-lg transition-all duration-200"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-green-400/20 border border-green-400/40 text-white rounded-br-sm'
                      : 'bg-slate-700/60 border border-slate-600/50 text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/60 border border-slate-600/50 px-4 py-3 rounded-xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-green-400/20 bg-slate-900/40 flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('chatbot.placeholder')}
              disabled={isLoading}
              className="flex-1 bg-slate-800/80 border border-green-400/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-400/60 transition-all duration-200 disabled:opacity-50"
            />
            <button
              onClick={() => void sendMessage()}
              disabled={isLoading || input.trim().length === 0}
              className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-green-400 hover:bg-green-300 text-slate-900 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t('chatbot.title')}
        className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg shadow-green-500/40 hover:shadow-green-500/60 hover:scale-110 transition-all duration-300"
      >
        <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-green-300 rounded-full border-2 border-slate-900 animate-pulse" />
        {isOpen ? (
          <X size={22} className="text-slate-900" />
        ) : (
          <MessageCircle size={22} className="text-slate-900" />
        )}
      </button>
    </div>
  );
}
