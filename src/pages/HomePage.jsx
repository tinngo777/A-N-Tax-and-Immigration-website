import React from 'react';

const HomePage = ({ T, setPage }) => (
  <div className="container mx-auto text-center animate-fade-in-up">
    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 my-8">
      {/* Hero heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6 border-b-4 border-[#90EE90] inline-block pb-2">
        {T.heroQuote}
      </h2>
      
      {/* Services section */}
      <div className="grid md:grid-cols-2 gap-8 my-10 text-left">
        {/* Tax services card (Blue) */}
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-700">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">{T.taxServices}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {T.taxList.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {/* Immigration services card (Red) */}
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">{T.immigrationServices}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {T.immigrationList.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Call-to-action buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-white border border-gray-200 p-6 rounded-lg w-full md:w-auto">
          <p className="text-lg text-gray-700 mb-3">{T.findOutMore}</p>
          <button 
            onClick={() => setPage('services')}
            className="bg-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-105"
          >
            {T.ourServicesLink}
          </button>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-lg w-full md:w-auto">
          <p className="text-lg text-gray-700 mb-3">{T.haveQuestions}</p>
          <button 
            onClick={() => setPage('contact')}
            className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-105"
          >
            {T.contactUsLink}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
