import React from 'react';

// STYLES
import styles from './Contact.css';

// COMPONENTS
import ContactForm from './components/ContactForm/ContactForm';

const contact = (props) => (
    <div className={styles.Contact} >
        <section>
            Header
        </section>

        <section>
            <ContactForm />
        </section>
    </div>
);

export default contact;