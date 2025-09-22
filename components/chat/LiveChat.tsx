'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Send, X, AlertTriangle, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { chatMessages } from '@/lib/mockData';
import type { ChatMessage } from '@/lib/mockData';

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessages);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojis = ['😀', '😂', '😢', '😡', '👍', '👎', '🔥', '💪', '🇵🇭', '⚖️'];
  const bannedWords = ['scam', 'idiot'];

  const generateUsername = () => {
    const prefixes = ['PinoyFighter', 'LabanPH', 'JusticePH', 'AnonymousHero', 'KababayanWarrior'];
    const numbers = Math.floor(Math.random() * 999) + 1;
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${numbers}`;
  };

  const containsBannedWords = (text: string) => {
    return bannedWords.some(word => text.toLowerCase().includes(word.toLowerCase()));
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    if (containsBannedWords(newMessage)) {
      alert('Your message contains inappropriate content and cannot be sent.');
      return;
    }

    const message: ChatMessage = {
      id: Date.now().toString(),
      username: generateUsername(),
      message: newMessage,
      timestamp: new Date(),
      reported: false,
    };

    setMessages(prev => [message, ...prev]);
    setNewMessage('');
  };

  const handleReportMessage = (messageId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, reported: true }
          : msg
      )
    );
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours}h ago`;
  };

  const addEmoji = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-corruption-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 h-5 w-5 bg-corruption-yellow rounded-full flex items-center justify-center text-xs font-bold text-corruption-dark animate-pulse">
            {messages.length}
          </span>
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 z-50 flex flex-col chat-container">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-corruption-dark rounded-t-lg">
            <div>
              <h3 className="font-semibold text-white text-sm">Live Chat</h3>
              <p className="text-xs text-gray-400">{messages.length} messages</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.reported ? 'opacity-50' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-corruption-yellow font-semibold text-xs">
                        {message.username}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {formatTimeAgo(message.timestamp)}
                      </span>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {message.reported ? '[Message reported and hidden]' : message.message}
                    </p>
                  </div>
                  {!message.reported && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleReportMessage(message.id)}
                      className="text-gray-500 hover:text-red-400 p-1 ml-2"
                      title="Report message"
                    >
                      <AlertTriangle className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-700 bg-gray-800 rounded-b-lg">
            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="mb-2 p-2 bg-gray-700 rounded-lg">
                <div className="grid grid-cols-5 gap-2">
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => addEmoji(emoji)}
                      className="text-lg hover:bg-gray-600 rounded p-1 transition-colors"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-gray-400 hover:text-corruption-yellow p-2"
              >
                <Smile className="h-4 w-4" />
              </Button>
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
                maxLength={280}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-corruption-red hover:bg-red-700 text-white px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {newMessage.length}/280 characters • Stay anonymous and respectful
            </p>
          </div>
        </div>
      )}
    </>
  );
}
