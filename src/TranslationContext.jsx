
import React, {
  createContext,
  useContext,
  useState,
} from 'react'


const Translation = createContext(null)

const translations = {
  en: {
    title: 'My Recipe App',
    description: 'My Recipe App description',
    name: 'Name',
    difficulty: 'Difficulty',
    prepTime: 'Preparation time',
    cookTime: 'Cooking time',
    protein: 'Protein (g)',
  },
  de: {
    title: 'Mein Rezept-App',
    description: 'Mein Rezept-App-Beschreibung',
    name: 'Name',
    difficulty: 'Schwierigkeit',
    prepTime: 'Vorbereitungstempo',
    cookTime: 'Kochzeit',
    protein: 'Protein (g)',
  }
}

export default function TranslationProvider({ children }) {
  const [locale, setLocale] = useState('en')

  const t = (key) => {
    return translations[locale][key] || key
  }
  return (
    <Translation.Provider value={{
      t,
      locale,
      setLocale
    }}>
      {children}
    </Translation.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(Translation)

  if (context === null) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }

  return context
}
