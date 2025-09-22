'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/translations';

export function Footer() {
  const [language] = useState<Language>('en');
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);
  const t = useTranslation(language);

  const cryptoWallets = [
    { name: 'TON', address: 'UQD8RmP7C9CDUGuJRuVO1IP7xqpUPR0tFCu5n5rvwGaSM6yt' },
    { name: 'Solana', address: '549m2zaHWppZ56jD9LuqhM4jy9vYVsp7NGVtwFyJsvG7' },
    { name: 'EVM', address: '0x667756929203c71f66cb33e9e69649f3c7feeae1' },
  ];

  const copyToClipboard = (address: string, walletName: string) => {
    navigator.clipboard.writeText(address);
    setCopiedWallet(walletName);
    setTimeout(() => setCopiedWallet(null), 2000);
  };

  return (
    <footer className="bg-corruption-dark border-t border-corruption-red/20 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-ph-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">KK</span>
              </div>
              <span className="font-bold text-lg text-white">
                KurakotKiller.ph
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fighting the 3.3 trillion peso flood control corruption scandal. 
              Built for Filipinos, by Filipinos, using free tools to demand justice.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="h-4 w-4 text-corruption-red" />
              <span>{t.transparency_note}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/contribute" className="block text-sm hover:text-ph-yellow transition-colors">
                {t.contribute}
              </Link>
              <Link href="/transparency" className="block text-sm hover:text-ph-yellow transition-colors">
                {t.transparency}
              </Link>
              <Link href="/safety" className="block text-sm hover:text-ph-yellow transition-colors">
                {t.safety}
              </Link>
              <Link href="/contact" className="block text-sm hover:text-ph-yellow transition-colors">
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">{t.social}</h3>
            <div className="space-y-3">
              <a
                href="https://x.com/KurakotKillerPH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-ph-yellow transition-colors"
              >
                <span>@KurakotKillerPH</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Donations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">{t.donation}</h3>
            <div className="space-y-3">
              {/* Traditional Payments */}
              <div className="space-y-2">
                <p className="text-sm text-gray-400">GCash / Maya:</p>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <span className="text-xs text-gray-400">QR Code Available</span>
                </div>
              </div>

              {/* Crypto Wallets */}
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Crypto Wallets:</p>
                {cryptoWallets.map((wallet) => (
                  <div key={wallet.name} className="bg-gray-800 rounded-lg p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-corruption-yellow">
                        {wallet.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(wallet.address, wallet.name)}
                        className="p-1 h-auto"
                      >
                        {copiedWallet === wallet.name ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <p className="text-[10px] text-gray-400 break-all mt-1">
                      {wallet.address.substring(0, 20)}...
                    </p>
                  </div>
                ))}
              </div>

              {/* BuyMeACoffee */}
              <a
                href="https://buymeacoffee.com/kurakotkiller"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-corruption-yellow text-corruption-dark px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-yellow-400 transition-colors"
              >
                Buy Me a Coffee ☕
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-corruption-red/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 KurakotKiller.ph. Fighting corruption, demanding justice.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-corruption-red" />
              <span>for the Filipino people</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
