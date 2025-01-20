import en from './en.json';
import it from './it.json';
import type { Translations } from './types';

export { Translations };
export const translations: Record<string, Translations> = { en, it };