maptilersdk.config.apiKey = mapToken;

const myMap = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style:  maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 8, // starting zoom
});

myMap.on('load', () => {
    new maptilersdk.Marker({color: "red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new maptilersdk.Popup({offset: 25})
                .setHTML(`
                    <h4>${listing.location}</h4>
                    <p>Exact location will be provided after booking</p>
                `)
        )
        .addTo(myMap);
});
