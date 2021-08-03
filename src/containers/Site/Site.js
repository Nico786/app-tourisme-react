import React, { Component } from 'react';
import Accueil from './Accueil/Accueil';
import Location from './Location/Location';
import Contact from './Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';
import { Route, Switch } from 'react-router';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/Footer';
import Error404 from '../../components/Erreurs/Error404';

class Site extends Component {
    render() {
        return (
            <>
                <div className='site'>
                    <NavBar />
                    <Container>
                        <Switch>
                            <Route path="/" exact render={() => <Accueil />} />
                            <Route path="/location" render={() => <Location />} />
                            <Route path="/contact" render={(props) => <Contact {...props} />} />
                            <Route render={() => <Error404 />} />
                        </Switch>
                    </Container>
                    <div className="minSite"></div>
                </div>
                <Footer className='footer'/>
            </>
        )
    }
}

export default Site;