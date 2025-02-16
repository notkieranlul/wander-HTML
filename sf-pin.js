        // create the popup for tenderloin
        const popup = new mapboxgl.Popup({ offset: 10 }).setText(
        'Tenderloin: Crime Rate: High. Characteristics: Dense urban area with significant homeless population and social services. Common Crimes: Violent crimes, drug-related offenses, and property crimes.'
    );

    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el)
        .setLngLat(tenderloin)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);


        // create the popup for soma
        const popup_soma = new mapboxgl.Popup({ offset: 10 }).setText(
        'South of Market (SoMa): Crime Rate: High. Characteristics: Mix of residential, commercial, and industrial areas. Common Crimes: Violent crimes and property crimes, especially at night.'
    );

    // create DOM element for the marker
    const el2 = document.createElement('div');
    el2.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el2)
        .setLngLat(soma)
        .setPopup(popup_soma) // sets a popup on this marker
        .addTo(map);

        // create the popup for bayview
        const popup_bayview = new mapboxgl.Popup({ offset: 10 }).setText(
        'Bayview-Hunters Point: Crime Rate: High. Characteristics: Historically underserved area with ongoing community improvement efforts. Common Crimes: Violent crimes and property crimes.'
    );

    // create DOM element for the marker
    const el3 = document.createElement('div');
    el3.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el3)
        .setLngLat(bayview)
        .setPopup(popup_bayview) // sets a popup on this marker
        .addTo(map);

        // create the popup for sunset
        const popup_senset = new mapboxgl.Popup({ offset: 10 }).setText(
        'Sunset District: Crime Rate: Moderate. Characteristics: Mostly residential, with a mix of single-family homes and apartments. Common Crimes: Property crimes, particularly in commercial zones.'
    );

    // create DOM element for the marker
    const el5 = document.createElement('div');
    el5.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el5)
        .setLngLat(sunset)
        .setPopup(popup_senset) // sets a popup on this marker
        .addTo(map);


        // create the popup for richmond
        const popup_richmond = new mapboxgl.Popup({ offset: 10 }).setText(
        'Richmond District: Crime Rate: Moderate. Characteristics: Diverse, family-friendly, with busy commercial areas. Common Crimes: Property crimes like theft and burglary, especially in busier parts.'
    );

    // create DOM element for the marker
    const el4 = document.createElement('div');
    el4.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el4)
        .setLngLat(richmond)
        .setPopup(popup_richmond) // sets a popup on this marker
        .addTo(map);

        // create the popup for sunset
        const popup_noe = new mapboxgl.Popup({ offset: 10 }).setText(
        'Noe Valley: Crime Rate: Moderate. Characteristics: Family-friendly, known for its small-town feel within the city. Common Crimes: Property crimes, such as theft and burglary.'
    );

    // create DOM element for the marker
    const el6 = document.createElement('div');
    el6.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el6)
        .setLngLat(noe)
        .setPopup(popup_noe) // sets a popup on this marker
        .addTo(map);