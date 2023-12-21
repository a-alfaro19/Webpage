import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export function PropertyCard ({ id, images, title, location, price }) {
    return (
        <article className="property-card">
            <Carousel className="property-card-carousel mx-auto">
                {
                    images.map((url) => (
                        <Carousel.Item>
                            <Link to={`/property/${id}`}>
                                <img src={url} alt="Property image" className="property-card-img"/>
                            </Link>
                        </Carousel.Item>
                    ))
                }
            </Carousel>

            <div className="property-card-body">
                <h5 className="property-card-body-title">{title}</h5>
                <p className="property-card-body-p">{location}</p>
                <p className="property-card-body-p fw-semibold">{price}</p>
            </div>
        </article>
    );
}