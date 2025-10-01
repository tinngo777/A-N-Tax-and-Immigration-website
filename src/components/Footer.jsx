import React from 'react';

// The Footer is a reusable component for the bottom of the site.
const Footer = ({ T }) => (
  <footer className="bg-blue-900 text-white">
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <h3 className="font-bold text-lg mb-2 text-red-500">
          A&N Tax & Immigration Services
        </h3>
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} A&N Services. All Rights Reserved.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2 text-red-500">{T.footerContact}</h3>
        <p className="text-gray-200 text-sm">
          {T.footerAddress}<br />
          <span className="text-red-400">Email:</span> anpro817@gmail.com<br />
          <span className="text-red-400">Phone:</span> (214) 444-2007<br />
          <span className="text-red-400">Mobile:</span> (817) 808-3558
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2 text-red-500">{T.footerHours}</h3>
        <p className="text-gray-200 text-sm">
          Tue, Thu, Fri: 11am - 6pm<br />
          Sat: 12pm - 6pm<br />
          Mon, Wed, Sun: Closed
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
