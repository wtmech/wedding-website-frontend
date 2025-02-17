import en from './en.json';
import it from './it.json';
import type { Translations } from './types';

// Merge new translations with existing ones
const updatedEn = {
  ...en,
  navigation: {
    ...en.navigation,
    weddingGift: 'Wedding Gift'
  },
  weddingGift: {
    title: 'Wedding Gift',
    welcomeMessage: 'For those considering a gift to the newlyweds, we welcome your kind gesture through a bank transfer, using the details below or with PayPal or Venmo using the links below.',
    assistanceMessage: 'If you need any assistance, please don\'t hesitate to contact us!',
    thankYouMessage: 'We thank you from the bottom of our hearts for your love and for the thoughtful gift you wish to share with us on this special day.',
    bankDetails: {
      ibanLabel: 'Bank Account Number (IBAN)',
      iban: 'IT37P0306904404100000000507',
      swiftLabel: 'BIC/SWIFT (for international transfers)',
      swift: 'BCITITMM',
      bankLabel: 'Bank',
      bank: 'Intesa SanPaolo',
      addressLabel: 'Bank address',
      address: 'Via Milano 6-A, 88100 Catanzaro',
      beneficiaryLabel: 'Beneficiary',
      beneficiary: 'Rita Alimondi - Carmine Corano Scheri',
      referenceLabel: 'Reference',
      reference: 'Wedding Gift for Katia Corano Scheri & Billy Mech'
    }
  }
};

const updatedIt = {
  ...it,
  navigation: {
    ...it.navigation,
    weddingGift: 'Regalo di Nozze'
  },
  weddingGift: {
    title: 'Regalo di Nozze',
    welcomeMessage: 'Per chi desidera fare un regalo agli sposi, accogliamo con piacere il vostro gentile gesto tramite bonifico bancario, utilizzando i dettagli qui sotto o con PayPal o Venmo utilizzando i link qui sotto.',
    assistanceMessage: 'Se avete bisogno di assistenza, non esitate a contattarci! Saremo felici di aiutarvi con qualsiasi domanda riguardo il bonifico.',
    thankYouMessage: 'Vi ringraziamo di cuore per il vostro affetto e per il pensiero che vorrete regalarci in questo giorno speciale.',
    bankDetails: {
      ibanLabel: 'Numero di conto bancario (IBAN)',
      iban: 'IT37P0306904404100000000507',
      swiftLabel: 'BIC/SWIFT (per bonifici internazionali)',
      swift: 'BCITITMM',
      bankLabel: 'Banca',
      bank: 'Intesa SanPaolo',
      addressLabel: 'Indirizzo Banca',
      address: 'Via Milano 6-A, 88100 Catanzaro',
      beneficiaryLabel: 'Beneficiario',
      beneficiary: 'Rita Alimondi - Carmine Corano Scheri',
      referenceLabel: 'Causale',
      reference: 'Regalo di nozze per Katia Corano Scheri & Billy Mech'
    }
  }
};

export type { Translations };
export const translations: Record<string, Translations> = {
  en: updatedEn as Translations,
  it: updatedIt as Translations
};