'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveChat } from '@/components/chat/LiveChat';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-corruption-dark">
      <Header />
      <div className="p-4 max-w-md mx-auto text-white">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Contact Us</h1>
        {submitted ? (
          <p className="text-green-500 mb-4">
            Thanks! Your message was sent. Join #LabanSaKatiwalian on X!
          </p>
        ) : (
          <>
            <p className="mb-4 text-sm">
              Share tips or questions about the 3.3T peso flood-control corruption scandal. Your message is anonymous and sent via Formsubmit.
            </p>
            <form
              action="https://formsubmit.co/kurakotkillerph@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name (optional, anonymous)"
                className="w-full p-2 bg-gray-800 text-white rounded border border-gray-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email (optional, anonymous)"
                className="w-full p-2 bg-gray-800 text-white rounded border border-gray-600"
              />
              <textarea
                name="message"
                placeholder="Your message or tip"
                className="w-full p-2 bg-gray-800 text-white rounded border border-gray-600 h-32"
                required
              ></textarea>
              <input type="hidden" name="_subject" value="New KurakotKillerPH Contact Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </>
        )}
        <p className="mt-4 text-sm">
          Prefer X? Message{' '}
          <Link href="https://x.com/KurakotKillerPH" target="_blank" className="text-red-500 underline">
            @KurakotKillerPH
          </Link>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          No personal data stored. Fight the 3.3T peso corruption with us!
        </p>
      </div>
      <Footer />
      <LiveChat />
    </main>
  );
}
