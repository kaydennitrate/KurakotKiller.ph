import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveChat } from '@/components/chat/LiveChat';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KurakotKiller.ph - Fight 3.3T Peso Corruption',
  description: 'Expose the 3.3 trillion peso flood-control scandal. Share evidence anonymously and join the fight for justice. #LabanSaKatiwalian',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-corruption-dark text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  );
}
