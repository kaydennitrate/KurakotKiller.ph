'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/translations';

export function Header() {
  const [language] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation(language);

  return (
    <header className="bg-corruption-dark border-b border-corruption-red/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-ph-gradient rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">KK</span>
          </div>
          <span className="font-bold text-lg text-white">KurakotKiller.ph</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-ph-yellow transition-colors">
            {t.home}
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-ph-yellow transition-colors">
            {t.about}
          </Link>
          <Link href="/contribute" className="text-gray-300 hover:text-ph-yellow transition-colors">
            {t.contribute}
          </Link>
          <Link href="/transparency" className="text-gray-300 hover:text-ph-yellow transition-colors">
            {t.transparency}
          </Link>
          <Link href="/safety" className="text-gray-300 hover:text-ph-yellow transition-colors">
            {t.safety}
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-ph-yellow transition-colors">
            {t.contact}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-gray-300 hover:text-ph-yellow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-corruption-dark border-t border-corruption-red/20 px-4 py-4">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-300 hover:text-ph-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t.home}
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-ph-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t.about}
            </Link>
            <Link href="/contribute" className="text-gray-300 hover:text-ph-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t.contribute}
            </Link>
            <Link href="/transparency" className="text-gray-300 hover:text-ph-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t.transparency}
            </Link>
            <Link href="/safety" className="text-gray-300 hover:text-ph-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t.safety}
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-ph-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t.contact}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
