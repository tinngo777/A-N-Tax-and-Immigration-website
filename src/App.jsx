import React, { useState } from 'react';

// Import data and components
import { translations } from './data/translations.js';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutUs';
import ServicesPage from './pages/OurServices';
import OfficeHoursPage from './pages/OfficeHours';
import ContactPage from './pages/ContactUs';

// --- Main App Component ---
// This component manages the overall state, like the current page and language,
// and renders the correct page based on user interaction.
export default function App() {
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState('en');

  const T = translations[lang]; // T is a shorthand for the current language's translations


  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutPage T={T} />;
      case 'services':
        return <ServicesPage T={T} />;
      case 'hours':
        return <OfficeHoursPage T={T} />;
      case 'contact':
        return <ContactPage T={T} />;
      case 'home':
      default:
        return <HomePage T={T} setPage={setPage} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 flex flex-col">
      <Header setPage={setPage} lang={lang} setLang={setLang} T={T} />
      <main className="flex-grow p-4 md:p-8">
        {renderPage()}
      </main>
      <Footer T={T} />
    </div>
    
  );
}
