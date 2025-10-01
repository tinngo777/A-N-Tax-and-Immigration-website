import React from 'react';
import Card from '../components/Card';

const OurServices = ({ T }) => (
  <Card title={T.servicesTitle}>
     <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-10">
        {T.servicesIntro}
    </p>
    <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">{T.taxServices}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                {T.taxList.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">{T.immigrationServices}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                {T.immigrationList.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    </div>
  </Card>
);

export default OurServices;
