import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { search_by_id, editProperty } from './properties'
import { LocationSelector } from "./LocationSelector";

export function EditModal ({ id }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [property, setProperty] = useState(search_by_id(id));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProperty((prevObject) => ({
            ...prevObject,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editProperty(id, property);
    }

    const uneditableKeys = ["id", "coordinates"]

    const generateFormFields = () => {
        const formFields = [];

        for (const key in property) {
            if (property.hasOwnProperty(key) && !uneditableKeys.includes(key)) {
                if (key === "location") {
                    formFields.push(
                        <Form.Group>
                            <Form.Label>{key}</Form.Label>
                            <LocationSelector onLocationSelect={handleInputChange}/>
                        </Form.Group>
                    )
                } else {
                    formFields.push(
                        <Form.Group>
                            <Form.Label>{key}</Form.Label>
                            <Form.Control
                                type="text"
                                name={key} 
                                value={property[key]}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    )
                }
            } 
        }

        return formFields;
    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>Editar</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Propiedad</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {generateFormFields()}
                        <br />
                        <Button type="submit">Actualizar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}