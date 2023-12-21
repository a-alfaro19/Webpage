import { Container } from "react-bootstrap";


export function PhotoGallery ({photos}) {
    return (
        <Container className="photo-gallery">
            {photos.map((img) => (
                <img src={img} alt="" className="photo-gallery-img"/>
            ))}
        </Container>
    );
}