import React from 'react';
import Card from '../components/Card';

const AboutUs = ({ T }) => (
  <Card title={T.aboutTitle}>
    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
        {T.aboutText}
    </p>
  </Card>
);

export default AboutUs;
