import React from 'react';

// This is a simple wrapper component to give pages a consistent look and feel.
// It creates a styled card with a title.
const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 my-8 animate-fade-in-up container mx-auto border-t-4 border-[#90EE90] hover:shadow-2xl hover:border-yellow-400 transition-all duration-300">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
      {title}
    </h2>
    {children}
  </div>
);

export default Card;
