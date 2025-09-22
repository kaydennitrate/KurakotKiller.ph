'use client';

import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/translations';

export function HeroSection() {
  const [language] = useState<Language>('en');
  const t = useTranslation(language);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.6)), url('https://images.pexels.com/photos/552792/pexels-photo-552792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
          }}
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-corruption-red/20 via-transparent to-corruption-yellow/20 animate-pulse-corruption" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-corruption-red/20 border border-corruption-red/40 text-corruption-yellow text-sm font-medium backdrop-blur-sm">
            <span className="animate-pulse mr-2">🔥</span>
            BREAKING: 3.3 Trillion Peso Scandal Exposed
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-corruption-red via-corruption-yellow to-corruption-red bg-clip-text text-transparent">
              {t.heroTitle.split(' ').slice(0, 3).join(' ')}
            </span>
            <br />
            <span className="text-white">
              {t.heroTitle.split(' ').slice(3).join(' ')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-corruption-dark/60 backdrop-blur-sm border border-corruption-red/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-corruption-red">3.3T</div>
              <div className="text-sm text-gray-300">Pesos Stolen</div>
            </div>
            <div className="bg-corruption-dark/60 backdrop-blur-sm border border-corruption-red/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-corruption-yellow">500+</div>
              <div className="text-sm text-gray-300">Ghost Projects</div>
            </div>
            <div className="bg-corruption-dark/60 backdrop-blur-sm border border-corruption-red/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500">25K+</div>
              <div className="text-sm text-gray-300">People Fighting</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-corruption-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.heroButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-corruption-yellow text-corruption-yellow hover:bg-corruption-yellow hover:text-corruption-dark px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Evidence
            </Button>
          </div>

          {/* Trending Hashtags */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            <span className="text-gray-400 text-sm">Trending:</span>
            {['#Floodgate', '#TrillionPesoMarch', '#LabanSaKatiwalian', '#JusticeForPH'].map((hashtag) => (
              <span
                key={hashtag}
                className="px-3 py-1 bg-corruption-yellow/20 text-corruption-yellow text-sm rounded-full border border-corruption-yellow/30 backdrop-blur-sm hover:bg-corruption-yellow/30 transition-colors cursor-pointer"
              >
                {hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-corruption-yellow rounded-full flex justify-center">
            <div className="w-1 h-3 bg-corruption-yellow rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}