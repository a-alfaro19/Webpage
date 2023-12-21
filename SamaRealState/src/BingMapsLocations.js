import config from "./config";

export const getLocationName = (latitude, longitude) => {
    const apiUrl = `https://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${config.bingMapsApiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        // Extrae el nombre de la ubicación desde la respuesta
        const locationName = data.resourceSets[0]?.resources[0]?.name;

        if (locationName) {
            return locationName;
        } else {
            return "No se pudo obtener el nombre de la ubicación."
        }
    })
    .catch(error => {
        console.error('Error al obtener el nombre de la ubicación:', error);
    });
}
