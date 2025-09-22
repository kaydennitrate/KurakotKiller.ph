'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const t = useTranslation(language);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tl' : 'en');
  };

  const navItems = [
    { href: '/', label: t.home },
    { href: '/contribute', label: t.contribute },
    { href: '/transparency', label: t.transparency },
    { href: '/contact', label: t.contact },
    { href: '/safety', label: t.safety },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-corruption-red/20 bg-corruption-dark/95 backdrop-blur supports-[backdrop-filter]:bg-corruption-dark/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-ph-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">KK</span>
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">
              KurakotKiller.ph
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-ph-yellow transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-ph-yellow p-2"
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'EN' : 'TL'}
              </span>
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-ph-yellow relative p-2"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-corruption-red rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                3
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-ph-yellow p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-corruption-red/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-ph-yellow transition-colors duration-200 font-medium py-2 px-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}