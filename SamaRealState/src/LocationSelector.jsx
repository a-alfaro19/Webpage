import React, { useState, useEffect } from 'react';
import config from './config';

export function LocationSelector ({ onLocationSelect }) {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.bing.com/api/maps/mapcontrol?key=${config.bingMapsApiKey}&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);
    
        window.initMap = () => {
          const bingMap = new window.Microsoft.Maps.Map(document.getElementById('bing-map'), {
            credentials: config.bingMapsApiKey,
          });
    
          setMap(bingMap);
    
          // Añade un manejador de clic para obtener la ubicación
          window.Microsoft.Maps.Events.addHandler(bingMap, 'click', (e) => {
            const location = e.location;

            // Crea un marcador (Pushpin) en la ubicación clicada
            const pushpin = new window.Microsoft.Maps.Pushpin(location, {
                title: 'Ubicación seleccionada',
            });

            // Añade el marcador al mapa
            bingMap.entities.clear(); // Limpia los marcadores existentes
            bingMap.entities.push(pushpin);

            onLocationSelect({ lat: location.latitude, lng: location.longitude });
          });
        };

        return () => {
            document.body.removeChild(script);
            delete window.initMap;
          };
        }, [onLocationSelect]);

    return (
        <div id="bing-map" style={{ height: '400px', width: '100%' }}></div>
    );
}