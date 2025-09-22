import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UploadForm } from '@/components/upload/UploadForm';
import { LiveChat } from '@/components/chat/LiveChat';

export default function Contribute() {
  return (
    <main className="min-h-screen bg-corruption-dark">
      <Header />
      <UploadForm />
      <Footer />
      <LiveChat />
    </main>
  );
}