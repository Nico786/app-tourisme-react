import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Titre from '../../../components/Titre/Titre';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import ContactForm from '../Contact/ContactForm'

class Contact extends Component {



    render() {
        return (
            <>
                <Titre>Contactez-nous !</Titre>
                <div>
                    <h1>Adresse</h1>
                    <p>ieapd eajdpadjd pdjzaz</p>
                    <h1>Téléphone</h1>
                    <p>0646789855</p>
                    <h1>Envie de nous écrire?</h1>
                    <LinkContainer to={this.props.match.url + '/form'}>
                        <Button>Formulaire de contact</Button>
                    </LinkContainer>
                    <Route path={this.props.match.url + '/form'} render={(props) => <ContactForm />} />
                </div>
            </>
        )
    }
}

export default Contact;