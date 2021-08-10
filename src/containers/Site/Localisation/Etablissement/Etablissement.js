import React from 'react';
import Card from 'react-bootstrap/Card'
import Horaires from './Horaires';

const Etablissement = (props) => (
    <Card>
        <Card.Header>{props.nom}</Card.Header>
        <Card.Body>
            <Card.Title>
                Tel: {props.telephone} <br />
                {props.mail && `mail: ${props.mail}`}
            </Card.Title>
            <Card.Text>
                <b>Adresse: </b>
                {props.adresse[0].lignes[0]}, {props.adresse[0].commune} - {props.adresse[0].codePostal} <br />
                <b>Horaires: </b>
                {props.horaires && <Horaires horaires={props.horaires} />}
                {props.url && <a href={props.url} target="_blank" className="btn btn-success">Visiter le site</a>}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default Etablissement;