import React, { useRef } from 'react';
import Card from '../components/Card';

const OurServices = ({ T }) => {
  const immigrationRef = useRef(null);

  const scrollToImmigration = () => {
    immigrationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card title={T.servicesTitle}>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-10">
        {T.servicesIntro}
      </p>

      {/* Tax Services Section */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{T.taxServices}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {T.taxServicesList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>



      {/* Immigration Services Section */}
      <div ref={immigrationRef} className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-red-700 mb-4">{T.immigrationServices}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {T.immigrationServicesList.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </Card>
  );
};

export default OurServices;
