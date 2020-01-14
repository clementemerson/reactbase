import './app.scss';
import React from 'react';

import ContactForm from '../contact-form/contact-form';

const App = () => {
    return (
        <div className="container">
            <ContactForm className="contact-form" />
        </div>
    );
}

export default App;