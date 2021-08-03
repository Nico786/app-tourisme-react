import React from 'react';
import Titre from '../../../components/Titre/Titre';
import Image from 'react-bootstrap/Image';
import imageAccueil from '../../../asset/images/chateau.jpg'

const Accueil = (props) => (
    <>
        <Titre>Bienvenue sur le site de l'Ariège</Titre>
        <p>Le site vous aidant à trouver la liste des établissement de l'Ariège !</p>
        <Image src={imageAccueil} alt="chateau" fluid thumbnail />
    </>
)

export default Accueil;