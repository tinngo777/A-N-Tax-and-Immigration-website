import React from 'react';
import Card from '../components/Card';

const OfficeHours = ({ T }) => (
    <Card title={T.hoursTitle}>
        <div className="max-w-md mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                {Object.entries(T.schedule).map(([day, time]) => (
                    <div key={day} className="flex justify-between py-3 border-b last:border-b-0">
                        <span className="font-medium text-gray-800">{day}</span>
                        <span className="text-gray-600">{time}</span>
                    </div>
                ))}
            </div>
        </div>
    </Card>
);

export default OfficeHours;
