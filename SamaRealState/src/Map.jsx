import { useEffect } from 'react';
import config from './config';


export function Map( {location} ) {
    useEffect(() => {
        // Carga la API de Bing Maps utilizando la clave de API
        const script = document.createElement('script');
        script.src = `https://www.bing.com/api/maps/mapcontrol?key=${config.bingMapsApiKey}&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);
    
        // Inicializa el mapa
        window.initMap = () => {
          const map = new window.Microsoft.Maps.Map(document.getElementById('bing-map'), {
            center: new window.Microsoft.Maps.Location(location.latitude, location.longitude),
            zoom: 14,
          });
    
          // Agrega un marcador
          const pushpin = new window.Microsoft.Maps.Pushpin(map.getCenter(), null);
          map.entities.push(pushpin);
        };
    
        return () => {
          // Limpia la callback y el script cuando el componente se desmonta
          document.body.removeChild(script);
          delete window.initMap;
        };
    }, [location]);

    return <div id="bing-map" style={{ width: '100%', height: '400px' }}></div>;
}