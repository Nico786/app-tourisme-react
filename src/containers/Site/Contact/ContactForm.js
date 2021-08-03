import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { withFormik } from "formik";
import * as Yup from "yup";

class ContactForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Votre nom"
                        name="nom"
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        value={this.props.values.nom} />
                    {
                        this.props.touched.nom && this.props.errors.nom && <span style={{ color: 'red' }}>{this.props.errors.nom}</span>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Votre adresse mail"
                        name="email"
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        value={this.props.values.email} />
                    {
                        this.props.touched.email && this.props.errors.email && <span style={{ color: 'red' }}>{this.props.errors.email}</span>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Votre Message:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        value={this.props.values.message}
                    />
                    {
                        this.props.touched.message && this.props.errors.message && <span style={{ color: 'red' }}>{this.props.errors.message}</span>
                    }
                </Form.Group>

                <Button variant="primary" onClick={this.props.handleSubmit}>
                    Valider
                </Button>
            </Form>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, "5 caractères minimum!")
            .required('Le nom est obligatoire'),
        email: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("L'email est obligatoire"),
        message: Yup.string()
            .min(50, "Le message doit faire au moins 50carac")
            .max(200, "Le message doit faire moins de 200carac")
            .required("Le message est obligatoire")
    }),
    handleSubmit: (values, { props }) => {
        alert('Message envoyé')
    }

})(ContactForm);