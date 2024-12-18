
        loadICountries();

        async function loadICountries() {
            let res = await fetch("https://restcountries.com/v3.1/all");
            let countries = await res.json();
            let body = "";

            countries.forEach(element => {
                body += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card shadow-sm">
                        <img src="${element.flags.png}" alt="Flag of ${element.name.common}">
                        <div class="card-body">
                            <h3 class="card-title">${element.name.common}</h3>
                            <p>Capital: ${element.capital ? element.capital[0] : 'N/A'}</p>
                            <p>Population: ${element.population.toLocaleString()}</p>
                            <a href="${element.maps.googleMaps}" class="btn btn-primary btn-sm" target="_blank">View Map</a>
                        </div>
                    </div>
                </div>
                `;
            });

            document.getElementById("row").innerHTML = `<div class="row">${body}</div>`;
        }

        function searchCountry() {
            let txtSearch = document.getElementById("txtSearch").value;
            fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
                .then(res => res.json())
                .then(data => {
                    let body = "";
                    data.forEach(element => {
                        body += `
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card shadow-sm">
                                <img src="${element.flags.png}" alt="Flag of ${element.name.common}">
                                <div class="card-body">
                                    <h3 class="card-title">${element.name.common}</h3>
                                    <p>Capital: ${element.capital ? element.capital[0] : 'N/A'}</p>
                                    <p>Population: ${element.population.toLocaleString()}</p>
                                    <a href="${element.maps.googleMaps}" class="btn btn-primary btn-sm" target="_blank">View Map</a>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                    document.getElementById("row").innerHTML = `<div class="row">${body}</div>`;
                });
        }
    

























