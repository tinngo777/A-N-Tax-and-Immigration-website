import React from 'react';
import Card from '../components/Card';

const ContactUs = ({ T }) => {
    // IMPORTANT: Replace this with your actual Formspree endpoint URL.
    // Go to formspree.io to create a new form and get your unique ID.
    const FORM_ENDPOINT = "https://formspree.io/f/your_form_id_here";

    return (
        <Card title={T.contactTitle}>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-10">
                {T.contactIntro}
            </p>
            <form 
                action={FORM_ENDPOINT} 
                method="POST"
                className="max-w-2xl mx-auto space-y-4"
            >
                <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder={T.formName} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                    <input type="tel" name="phone" placeholder={T.formPhone} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                </div>
                <input type="email" name="email" placeholder={T.formEmail} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                <input type="text" name="subject" placeholder={T.formSubject} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                <textarea name="message" rows="5" placeholder={T.formMessage} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"></textarea>
                <div className="text-center">
                    <button type="submit" className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105">
                        {T.formSubmit}
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default ContactUs;
