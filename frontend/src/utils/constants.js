export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const SITE_NAME = 'Adhishrihaan Foundation';

export const COLORS = {
  primary: '#2d4a22',
  primaryDark: '#1f3317',
  secondary: '#fdfbf7',
  accent: '#d4a373',
  text: '#1a1a1a',
  muted: '#4a4a4a',
  sectionAlt: '#f4efe6',
  sectionCta: '#e8ebd9',
};

export const VOLUNTEER_INTERESTS = [
  { value: 'education', label: 'Education' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'environment', label: 'Environment' },
  { value: 'animal-welfare', label: 'Animal Welfare' },
  { value: 'general', label: 'General Support' },
];
