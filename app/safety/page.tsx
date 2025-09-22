import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveChat } from '@/components/chat/LiveChat';
import { Shield, Lock, Eye, AlertTriangle, UserX, Phone } from 'lucide-react';

export default function Safety() {
  return (
    <main className="min-h-screen bg-corruption-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-12 w-12 text-corruption-red" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Safety Guidelines
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your safety is our top priority. Follow these guidelines to protect yourself 
              while fighting corruption in the Philippines.
            </p>
          </div>

          {/* Digital Safety */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">Digital Safety</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-corruption-yellow mb-3">Anonymity Protection</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Never use your real name when posting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Avoid sharing personal details in chat</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Use VPN when accessing from sensitive locations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Clear browser history after sessions</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-corruption-yellow mb-3">Evidence Sharing</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Remove metadata from photos before upload</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Blur faces of innocent people in images</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Keep original copies in secure location</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Avoid uploading from work/government networks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Physical Safety */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-6 w-6 text-corruption-yellow" />
              <h2 className="text-2xl font-bold text-white">Physical Safety</h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-corruption-yellow mb-3">When Gathering Evidence</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-corruption-red mt-1">⚠️</span>
                      <span>Never trespass on private property</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-corruption-red mt-1">⚠️</span>
                      <span>Avoid confronting suspects directly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Document from public areas only</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Inform trusted friends of your activities</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-corruption-yellow mb-3">At Protests</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Stay in groups, never protest alone</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Remain peaceful at all times</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Know your legal rights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Have emergency contacts ready</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-corruption-red" />
              <h2 className="text-2xl font-bold text-white">Warning Signs</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 mb-4">
                If you experience any of these, cease activities immediately and contact authorities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-900/30 rounded-lg p-4">
                  <h3 className="font-semibold text-corruption-red mb-2">Digital Threats</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Suspicious emails or messages</li>
                    <li>• Unusual device behavior</li>
                    <li>• Accounts being compromised</li>
                    <li>• Threats via social media</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4">
                  <h3 className="font-semibold text-corruption-red mb-2">Physical Threats</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Being followed or watched</li>
                    <li>• Verbal threats or intimidation</li>
                    <li>• Unusual interest in your activities</li>
                    <li>• Pressure from authority figures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Rights */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <UserX className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-white">Know Your Rights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <h3 className="font-semibold text-corruption-yellow mb-3">Constitutional Rights</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Freedom of speech and expression</li>
                  <li>• Right to peaceful assembly</li>
                  <li>• Right to access public information</li>
                  <li>• Protection against unlawful detention</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-corruption-yellow mb-3">If Detained</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Request to see a lawyer immediately</li>
                  <li>• Don't sign anything without legal counsel</li>
                  <li>• Exercise your right to remain silent</li>
                  <li>• Contact family/friends as soon as possible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Phone className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">Emergency Contacts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-corruption-yellow mb-3">Government Agencies</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">PNP Emergency:</span>
                    <span className="text-white font-mono">117</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">BFP Emergency:</span>
                    <span className="text-white font-mono">116</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DILG Hotline:</span>
                    <span className="text-white font-mono">117-1111</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ombudsman:</span>
                    <span className="text-white font-mono">8-373-7800</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-corruption-yellow mb-3">Legal Aid</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Public Attorney's Office:</span>
                    <span className="text-white font-mono">929-9436</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">IBP Legal Aid:</span>
                    <span className="text-white font-mono">818-4700</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CHR Hotline:</span>
                    <span className="text-white font-mono">929-1637</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">KurakotKiller.ph:</span>
                    <span className="text-corruption-yellow">admin@kurakotkiller.ph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Reminder */}
          <div className="bg-corruption-yellow/20 border border-corruption-yellow rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Remember</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              <strong>Your safety comes first.</strong> The fight against corruption is important, 
              but not worth risking your life or freedom. Always prioritize your well-being and 
              that of your family. When in doubt, step back and seek help from trusted sources.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <LiveChat />
    </main>
  );
}
