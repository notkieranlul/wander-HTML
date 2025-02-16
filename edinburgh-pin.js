        // create the popup for leith
        const popup_leith = new mapboxgl.Popup({ offset: 10 }).setText(
        'Leith: Crime Rate: High. Characteristics: Diverse area with a mix of residential and commercial properties. Common Crimes: Higher rates of violent crimes and property crimes.'
    );

    // create DOM element for the marker
    const elleith = document.createElement('div');
    elleith.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elleith)
        .setLngLat(leith)
        .setPopup(popup_leith) // sets a popup on this marker
        .addTo(map);


        // create the popup for new town
        const popup_newtown = new mapboxgl.Popup({ offset: 10 }).setText(
        'City Centre: Crime Rate: High. Characteristics: Busy commercial area with a high density of shops, bars, and restaurants. Common Crimes: Violent crimes, thefts, and anti-social behavior.'
    );

    // create DOM element for the marker
    const elnewtown = document.createElement('div');
    elnewtown.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elnewtown)
        .setLngLat(newtown)
        .setPopup(popup_newtown) // sets a popup on this marker
        .addTo(map);

        // create the popup for gorgie
        const popup_gorgie = new mapboxgl.Popup({ offset: 10 }).setText(
        'Gorgie: Crime Rate: High. Characteristics: Residential area with a mix of housing types. Common Crimes: Higher rates of property crimes and occasional violent crimes.'
    );

    // create DOM element for the marker
    const elgorgie = document.createElement('div');
    elgorgie.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elgorgie)
        .setLngLat(gorgie)
        .setPopup(popup_gorgie) // sets a popup on this marker
        .addTo(map);

        // create the popup for sighthill
        const popup_sighthill = new mapboxgl.Popup({ offset: 10 }).setText(
        'Sighthill: Crime Rate: High. Characteristics: Residential area with a mix of housing types. Common Crimes: Higher rates of property crimes and occasional violent crimes.'
    );

    // create DOM element for the marker
    const elsighthill = document.createElement('div');
    elsighthill.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elsighthill)
        .setLngLat(sighthill)
        .setPopup(popup_sighthill) // sets a popup on this marker
        .addTo(map);

        // create the popup for niddrie
        const popup_niddrie = new mapboxgl.Popup({ offset: 10 }).setText(
        'Niddrie: Crime Rate: High. Characteristics: Residential area with ongoing regeneration efforts. Common Crimes: Higher rates of violent crimes and anti-social behavior.'
    );

    // create DOM element for the marker
    const elniddrie = document.createElement('div');
    elniddrie.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elniddrie)
        .setLngLat(niddrie)
        .setPopup(popup_niddrie) // sets a popup on this marker
        .addTo(map);


        // create the popup for stockbridge
        const popup_stockbridge = new mapboxgl.Popup({ offset: 10 }).setText(
        'Stockbridge: Crime Rate: Moderate. Characteristics: Popular residential area with a village feel, known for its markets and cafes. Common Crimes: Property crimes and occasional thefts.'
    );

    // create DOM element for the marker
    const elstockbridge = document.createElement('div');
    elstockbridge.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elstockbridge)
        .setLngLat(stockbridge)
        .setPopup(popup_stockbridge) // sets a popup on this marker
        .addTo(map);

        // create the popup for bruntsfield
        const popup_bruntsfield = new mapboxgl.Popup({ offset: 10 }).setText(
        'Bruntsfield: Crime Rate: Moderate. Characteristics: Residential area with a mix of families and students, known for its parks and cafes.Common Crimes: Property crimes and occasional burglaries.'
    );

    // create DOM element for the marker
    const elbruntsfield = document.createElement('div');
    elbruntsfield.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elbruntsfield)
        .setLngLat(bruntsfield)
        .setPopup(popup_bruntsfield) // sets a popup on this marker
        .addTo(map);

        // create the popup for marchmont
        const popup_marchmont = new mapboxgl.Popup({ offset: 10 }).setText(
        'Marchmont: Crime Rate: Moderate. Characteristics: Residential area popular with students and families. Common Crimes: Property crimes and occasional thefts.'
    );

    // create DOM element for the marker
    const elmarchmont = document.createElement('div');
    elmarchmont.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elmarchmont)
        .setLngLat(marchmont)
        .setPopup(popup_marchmont) // sets a popup on this marker
        .addTo(map);

        // create the popup for newington
        const popup_newington = new mapboxgl.Popup({ offset: 10 }).setText(
        'Newington: Crime Rate: Moderate. Characteristics: Diverse area with a mix of residential and commercial properties. Common Crimes: Property crimes and occasional anti-social behavior.'
    );

    // create DOM element for the marker
    const elnewington = document.createElement('div');
    elnewington.id = 'marker';

    // create the marker
    new mapboxgl.Marker(elnewington)
        .setLngLat(newington)
        .setPopup(popup_newington) // sets a popup on this marker
        .addTo(map);