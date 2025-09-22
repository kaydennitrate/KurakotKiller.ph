export type Language = 'en' | 'tl';

export type Translations = {
  transparency_note: string;
  contribute: string;
  transparency: string;
  safety: string;
  contact: string;
  social: string;
  donation: string;
};

const translations: Record<Language, Translations> = {
  en: {
    transparency_note: 'Built with free tools, no personal data stored.',
    contribute: 'Contribute',
    transparency: 'Transparency',
    safety: 'Safety',
    contact: 'Contact',
    social: 'Social',
    donation: 'Support Us',
  },
  tl: {
    transparency_note: 'Ginawa gamit ang mga libreng tool, walang personal na data na iniimbak.',
    contribute: 'Mag-ambag',
    transparency: 'Transparency',
    safety: 'Kaligtasan',
    contact: 'Kontak',
    social: 'Sosyal',
    donation: 'Suportahan Kami',
  },
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
