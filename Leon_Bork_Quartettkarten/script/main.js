console.log("HERE WE ARE AGAIN");

data.forEach(animal => {
    console.log(animal.name);
});

$(document).ready(function () {
    $.each(data, function (index, animal) {
        // Verwende den benutzerdefinierten Bildnamen (image_file), wenn vorhanden
        const imageName = animal.image_file || (animal.name ? animal.name.toLowerCase().replace(/\s+/g, "_") + ".jpg" : "default.jpg");

        // Erstelle die Gruppenspezifische Klasse basierend auf der Gruppe
        const groupClass = animal.group ? `group-${animal.group.toLowerCase()}` : "";

        let divBox = $(`<div class="card-wrapper ${groupClass}">
            <div class="card-content">
                <div class="card-number">F${animal.id}</div>
                <div class="card-title">${animal.name_german || "Unbekannt"}</div>
                <img src="images/${imageName}" alt="${animal.name_german || "Unbekannt"}" class="card-image" />
                <div class="card-trivia">
                    ${animal.trivia_german || "Keine Beschreibung verfügbar."}
                </div>

                <div class="stat-icon">
                    <img src="images/icons/weight.png" alt="weight" />
                </div>
                <div class="stat-value">${animal.max_weight || "N/A"}</div>

                <div class="stat-icon">
                    <img src="images/icons/length.png" alt="length" />
                </div>
                <div class="stat-value">${animal.max_length || "N/A"}</div>

                <div class="stat-icon">
                    <img src="images/icons/age.png" alt="maximum age" />
                </div>
                <div class="stat-value">${animal.max_age || "N/A"}</div>

                <div class="stat-icon">
                    <img src="images/icons/speed.png" alt="max speed" />
                </div>
                <div class="stat-value">${animal.top_speed || "N/A"}</div>

                <div class="stat-icon">
                    <img src="images/icons/offspring.png" alt="offspring count per cycle" />
                </div>
                <div class="stat-value">${animal.litter_size || "N/A"}</div>

                <div class="stat-icon">
                    <img src="images/icons/death.png" alt="casualties per year" />
                </div>
                <div class="stat-value">${animal.deaths || "N/A"}</div>
            </div>
        </div>`);

        $('#wrapper').append(divBox);
    });
});
