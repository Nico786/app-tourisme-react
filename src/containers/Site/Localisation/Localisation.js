import React, { Component } from 'react';
import Titre from '../../../components/Titre/Titre';
import Etablissement from './Etablissement/Etablissement';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


class Localisation extends Component {

    state = {
        recherche: [],
    }

    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/09/${type}`)
            .then(reponse => {
                this.setState({ recherche: reponse.data.features })
            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        return (
            <>
                <Titre>Rechercher un établissement:</Titre>
                <div className="d-flex mb-2 justify-content-around">
                    <Button variant="secondary" onClick={() => this.rechercheEtablissement('mairie')}>Mairie</Button>
                    <Button variant="secondary" onClick={() => this.rechercheEtablissement('commissariat_police')}>Commissariat de police</Button>
                    <Button variant="secondary" onClick={() => this.rechercheEtablissement('pole_emploi')}>Pole Emploi</Button>
                    <Button variant="secondary" onClick={() => this.rechercheEtablissement('prefecture')}>Préfecture</Button>
                </div>
                <Row>
                    {this.state.recherche.map((etablissement,key) => {
                        return (
                            <Col md={6} className="mb-2" key={etablissement.properties.id}>
                                <Etablissement
                                    nom={etablissement.properties.nom}
                                    id={etablissement.properties.id}
                                    mail={etablissement.properties.email}
                                    adresse={etablissement.properties.adresses}
                                    url={etablissement.properties.url}
                                    telephone={etablissement.properties.telephone}
                                    horaires={etablissement.properties.horaires}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </>
        )
    }
}

export default Localisation;