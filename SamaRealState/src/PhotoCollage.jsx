import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import properties from './properties'
import { PhotoGallery } from "./PhotoGallery";

function search_by_id(id) {
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].id == id) {
        return properties[i];
      }
    }
    return null;
}

export function PhotoCollage ( {id} ) {
    const images = search_by_id(id).images;
    const [show, setShow] = useState(false);

    return (
        <Container className="photo-collage px-0">
            <Col md={6} lg={6} className="px-0">
                <img src={images[0]} alt="" className="photo-collage-main-img" />
            </Col>
            <Col md={6} lg={6} className="photo-collage-hide-col px-0">
                <Container className="photo-collage-grid">
                    <Row className="photo-collage-grid-row">
                        <Col className="px-0">
                            <img src={images[1]} alt="" className="photo-collage-img" />
                        </Col>
                        
                        <Col className="px-0">
                            <img src={images[2]} alt="" className="photo-collage-img" id="top-right-corner" />
                        </Col>
                    </Row>

                    <Row className="photo-collage-grid-row">
                        <Col className="px-0">
                            <img src={images[3]} alt="" className="photo-collage-img" />
                        </Col>

                        <Col className="px-0">
                            <img src={images[4]} alt="" className="photo-collage-img" id="bot-right-corner" />
                        </Col>
                    <Button onClick={() => setShow(true)} className="photo-collage-button">Mostrar mas</Button>
                    <Modal
                        show={show}
                        size="xl"
                        onHide={() => setShow(false)}
                        centered
                    >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <PhotoGallery photos={images}/>
                        </Modal.Body>
                    </Modal>
                    </Row>
                </Container>
            </Col>
        </Container>
    );
}