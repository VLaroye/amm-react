import React, { Component } from 'react';

// STYLES
import styles from './ContactForm.css';

class ContactForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulaire soumis !");
    }

    render () {
        return (
            <div className={styles.ContactForm} >
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Nom" name="Nom" />
                    <input type="text" placeholder="Prénom" name="Prenom" />
                    <input type="email" placeholder="Email" name="Email" />
                    <select name="Sujet">
                        <option value="Général">Général</option>
                        <option value="Groupe">Groupe</option>
                    </select>
                    <textarea />
                    <input type="submit"value="Envoyer" />
                </form>                
            </div>
        );
    }
} 
export default ContactForm;