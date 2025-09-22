import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveChat } from '@/components/chat/LiveChat';
import { Shield, Eye, Server, Users, Heart, Lock } from 'lucide-react';

export default function Transparency() {
  return (
    <main className="min-h-screen bg-corruption-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Transparency Report
            </h1>
            <p className="text-gray-400 text-lg">
              Built for Filipinos, by Filipinos, using free tools to fight corruption
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-6 w-6 text-corruption-red" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              KurakotKiller.ph was created as a response to the massive 3.3 trillion peso 
              flood control corruption scandal that has devastated Filipino communities. 
              We believe in transparent, accountable governance and the power of citizen journalism 
              to expose corruption and demand justice.
            </p>
          </div>

          {/* How We Operate */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-6 w-6 text-corruption-yellow" />
              <h2 className="text-2xl font-bold text-white">How We Operate</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Anonymous by Design</h3>
                    <p className="text-gray-400 text-sm">
                      No user accounts required. No personal data collected or stored.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Server className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Free Infrastructure</h3>
                    <p className="text-gray-400 text-sm">
                      Hosted on Vercel's free tier. No corporate funding or hidden agendas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Community Driven</h3>
                    <p className="text-gray-400 text-sm">
                      All content comes from Filipino citizens sharing their experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="h-5 w-5 text-corruption-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Evidence Verification</h3>
                    <p className="text-gray-400 text-sm">
                      All uploads reviewed for authenticity before publication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Technical Transparency</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-corruption-yellow mb-2">Frontend</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Next.js 14 (React framework)</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Leaflet.js for interactive maps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-corruption-yellow mb-2">Hosting & Security</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Vercel free tier hosting</li>
                    <li>• HTTPS encryption by default</li>
                    <li>• No analytics or tracking cookies</li>
                    <li>• No personal data collection</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h3 className="font-semibold text-white mb-3">Data Policy</h3>
                <div className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300">
                  <p className="mb-2">
                    <strong className="text-white">What we DON'T collect:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Personal information (names, addresses, phone numbers)</li>
                    <li>Email addresses or user accounts</li>
                    <li>IP addresses or location data</li>
                    <li>Browsing history or analytics</li>
                  </ul>
                  <p className="mt-4 mb-2">
                    <strong className="text-white">What we DO collect:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Public evidence submissions (after verification)</li>
                    <li>Anonymous chat messages (stored temporarily)</li>
                    <li>Public protest information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Funding & Support */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Funding & Support</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                KurakotKiller.ph operates entirely on donations from concerned Filipino citizens. 
                We accept donations through:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-corruption-yellow mb-2">Traditional</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• GCash</li>
                    <li>• Maya</li>
                    <li>• BuyMeACoffee</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-corruption-yellow mb-2">Cryptocurrency</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• TON</li>
                    <li>• Solana</li>
                    <li>• Ethereum (EVM)</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-corruption-yellow mb-2">Usage</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Hosting costs</li>
                    <li>• Domain registration</li>
                    <li>• Development time</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
                <p className="text-corruption-yellow text-sm">
                  <strong>Transparency Promise:</strong> All donation funds are used exclusively for 
                  platform maintenance and development. We maintain financial records and will publish 
                  quarterly transparency reports upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact & Verification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-corruption-yellow mb-3">Official Channels</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Email:</strong> admin@kurakotkiller.ph</p>
                  <p><strong>X (Twitter):</strong> @KurakotKillerPH</p>
                  <p><strong>Website:</strong> kurakotkiller.ph</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-corruption-yellow mb-3">Verification</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>To verify authenticity of this platform:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Check our verified X account</li>
                    <li>Verify SSL certificate</li>
                    <li>Contact us through official channels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Legal Notice</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              This platform is created for educational and informational purposes to raise awareness 
              about corruption in government projects. All information is crowdsourced and should be 
              verified independently. We do not advocate for illegal activities and encourage users 
              to engage in peaceful, legal forms of protest and civic engagement.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <LiveChat />
    </main>
  );
}
