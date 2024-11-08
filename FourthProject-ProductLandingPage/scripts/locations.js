// locations (modifiable array)
const locations = [
    {
        name: "Tokyo",
        prefecture: "Tokyo", 
        places: [
            {
                name: "Shinjuku Gyôen",
                image: "./images/Shinjuku-Gyoen.jpg",
                text: "Photo of a pavillion in Shinjuku park in Tokyo."
            }, 
            {
                name: "Tokyo", 
                image: "./images/Tokyo.jpg", 
                text: "Photo of Tokyo buildings from a water lilies pond."
            }, 
            {
                name: "Fuji-san", 
                image: "./images/Fuji-san.jpg", 
                text: "Photo of the Fuji-san from train."
            }, 
            {
                name: "Tokyo National Museum", 
                image: "./images/Tokyo-museum.jpg", 
                text: "Photo of the Tokyo National Museum in Ueno park."
            }
        ]
    }, 
    {
        name: "Takao Mount", 
        prefecture: "Tokyo", 
        places: [
            {
                name: "Takao Mount", 
                image: "./images/Takao-mount.jpg", 
                text: "Photo of mountains from Takao Mount summit."
            }, 
            {
                name: "Takao Mount sculpture", 
                image: "./images/Takao-sculpture.jpg", 
                text: "Photo of a octopus scultpure on Takao Mount trail."
            } 
        ]
    }, 
    {
        name: "Oze National Park",
        prefecture: "Tochigi", 
        places: [
            {
                name: "Oze park", 
                image: "./images/Oze-park.jpg", 
                text: "Photo of Oze national park."
            }, 
            {
                name: "Hiuchigatake mount", 
                image: "./images/Oze-park-3.jpg", 
                text: "Photo of Hiuchigatake mount in Oze national park."
            }, 
            {
                name: "Sanjo falls", 
                image: "./images/Oze-park-waterfall.jpg", 
                text: "Photo of Sanjo falls in Oze national park."
            }, 
            {
                name: "Oze park - Miike", 
                image: "./images/Oze-park-dragonfly.jpg", 
                text: "Photo of a dragonfly in Oze national park."
            }, 
            {
                name: "Hiuchigatake summit", 
                image: "./images/Oze-summit.jpg", 
                text: "Photo of a woman on Hiuchigatake summit in Oze national park."
            }, 
            {
                name: "Hiuchigatake summit", 
                video: "./images/video/Oze-summit.mp4",
                text: "Panorama from Hiuchigatake summit."
            }
        ]
    },
    {
        name: "Takayama",
        prefecture: "Gifu",
        places: [
            {
                name: "Hida no sato - folkloric village", 
                image: "./images/Hida-no-sato-village.jpg", 
                text: "Photo of Hida no sato, a folkloric village near Takayama."
            }, 
            {
                name: "Hida kokubun-ji", 
                image: "./images/Hida-Kokubun-ji.jpg", 
                text: "Photo of the pagoda in Hida Kokubun temple"
            },
            {
                name: "Sakurayama Hachimangu Shrine",
                image: "./images/Sakurayama-Hachimangu-Shrine.jpg", 
                text: "Photo of the great Torii of Sakurayama Hachimangu sanctuary."
            }, 
            {
                name: "Hida no sato - folkloric village", 
                image: "./images/Takayama.jpg", 
                text: "Photo of Hida no sato, a folkloric village near Takayama."
            }
        ]
    },
    {
        name: "Kurobe River",
        prefecture: "Toyama", 
        places: [
            {
                name: "Kurobe river", 
                image: "./images/Kurobe.jpg", 
                text: "Photo of Kurobe river."
            }, 
            {
                name: "Kurobe railway", 
                image: "./images/Kurobe-railway.jpg", 
                text: "Photo of the train on Kurobe river railway."
            }
        ]
    },
    {
        name: "Shirakawa-Gô",
        prefecture: "Gifu", 
        places: [
            {
                name: "Shirakawa-Gô historic village", 
                image: "./images/Shirakawa-Go-Village.jpg",
                text: "Photo of the historic village of Shirakawa-Gô."
            }, 
            {
                name: "Shirakawa-Gô houses", 
                image: "./images/Go-Shirakawa-house.jpg", 
                text: "Photo of two houses in the historic village of Shirakawa-Gô."
            }, 
            {
                name: "Shirakawa-Gô waterfall", 
                image: "./images/Shirakawa-Go-waterfall.jpg", 
                text: "Photo of a house and a waterfall in the historic village of Shirakawa-Gô."
            }
        ]
    },
    {
        name: "Nara",
        prefecture: "Nara", 
        places: [
            {
                name: "Kasuga Grand Shrine", 
                image: "./images/Kasuga-Taisha.jpg", 
                text: "Photo of the Kasuga Grand Shrine."
            }, 
            {
                name: "Nara deers", 
                image: "./images/Nara-deer.jpg", 
                text: "Photo of a deer in Nara."
            }, 
            {
                name: "Nara deers", 
                image: "./images/Nara-deer-3.jpg", 
                text: "Photo of a deer near a tree in Nara."
            }
        ]
    },
    {
        name: "Yoshino-yama",
        prefecture: "Nara", 
        places: [
            {
                name: "Yoshino yama", 
                image: "./images/Yoshino-yama.jpg", 
                text: "Photo in two houses among sakura trees in Yoshino yama."
            }
        ]
    },
    {
        name: "Osaka",
        prefecture: "Osaka", 
        places: [
            {
                name: "Osaka Light festival", 
                video: "./images/video/Osaka-light-festival.mp4",
                text: "Short film of Osaka light festival."
            } 
        ]
    },
    {
        name: "Kyôto",
        prefecture: "Kyôto", 
        places: [
            {
                name: "Tôji Pagoda (by night)", 
                image: "./images/Tôji.jpg", 
                text: "Photo of the Tôji Pagoda by night in Kyôto."
            }, 
            {
                name: "Gion matsuri", 
                image: "./images/Gion-matsuri.jpg", 
                text: "Photo of a woman participating in Gion matsuri, Kyôto."
            }, 
            {
                name: "Fushimi Inari", 
                image: "./images/Fushimi-Inari.jpg", 
                text: "Photo of the Fushimi Inari in Kyôto."
            }, 
            {
                name: "Heian Jingu", 
                image: "./images/Heian-Jingu-2.jpg", 
                text: "Photo of a pavillion in Heian Jingu gardens."
            }, 
            {
                name: "Kinkaku-ji", 
                image: "./images/Kinkaku-ji.jpg", 
                text: "Photo of the Kinkaku-ji on a sunny day."
            }, 
            {
                name: "Nijô castle", 
                image: "./images/Nijô.jpg", 
                text: "Photo of the Nijô castle."
            }, 
            {
                name: "Kyôto light festival", 
                image: "./images/Kyoto-light-festival.jpg", 
                text: "Photo of Kamigamo-jinja during the Kyôto light festival."
            }, 
            {
                name: "Kyôto tower", 
                image: "./images/Kyoto-tower.jpg", 
                text: "Photo of the Kyôto tower by night."
            }, 
            {
                name: "Tea ceremony", 
                image: "./images/Tea-ceremony.jpg", 
                text: "Photo of a tea ceremony with sweets."
            }
        ]
    },
    {
        name: "Tottori",
        prefecture: "Tottori", 
        places: [
            {
                name: "Tottori Dunes", 
                image: "./images/Tottori-dunes.jpg", 
                text: "Photo of Tottori dunes."
            }, 
            {
                name: "Tottori Bus", 
                image: "./images/Tottori-bus.jpg", 
                text: "Photo of a Pokemon themed Tottori bus."
            }, 
            {
                name: "Tottori Sand museum", 
                image: "./images/Tottori-sand-museum.jpg", 
                text: "Photo of a giant teddy bear in sand in the Tottori Sand museum."
            } 
        ] 
    },
    {
        name: "Kinosaki-onsen",
        prefecture: "Hyôgo", 
        places: [
            {
                name: "Kinosaki onsen", 
                image: "./images/Kinosaki-onsen.jpg", 
                text: "Photo of Kinosaki onsen river."
            } 
        ]
    },
    {
        name: "Hiroshima",
        prefecture: "Hiroshima", 
        places: [
            {
                name: "Hiroshima shrine", 
                image: "./images/Hiroshima.jpg", 
                text: "Photo of a mountain landscape below a Shinto temple rope."
            }, 
            {
                name: "Hiroshima castle mascot", 
                image: "./images/Hiroshima-castle.jpg", 
                text: "Photo of the Hiroshima catsle mascot."
            }, 
            {
                name: "Hiroshima castle", 
                image: "./images/Hiroshima-castle-2.jpg", 
                text: "Photo of the castle of Hiroshima."
            }
        ]
    },
    {
        name: "Onna",
        prefecture: "Okinawa", 
        places: [
            {
                name: "Cape Manzamo", 
                image: "./images/Okinawa.jpg", 
                text: "Photo of Cape Manzamo in Okinawa."
            }, 
            {
                name: "Okinawa beach", 
                image: "./images/Okinawa-beach.jpg", 
                text: "Photo of a beach in Okinawa."
            }, 
            {
                name: "Snorkeling & fish feeding", 
                video: "./images/video/Okinawa-fish.mp4",
                text: "Short film of someone feeding fishes in Okinawa sea."
            }
        ]
    },
    {
        name: "Nagano",
        prefecture: "Nagano", 
        places: [
            {
                name: "Nagano station", 
                image: "./images/Nagano-eki.jpg", 
                text: "Photo of the Nagano station by night."
            }, 
        ]
    }
];

// sort locations array by alphabetical order
const locationsFilter = locations.sort((a, b) => a.name.localeCompare(b.name));

// function that create the locations cards
function createCards(location) {
    let cardSection = document.getElementById("automatised-locations");
    if (cardSection.children.length > 0) {
        cardSection.innerHTML = "";
    }

    let buttonUp = document.createElement("button");
    buttonUp.innerHTML = "Go back to map";
    buttonUp.setAttribute("id", "go-back-button"); 
    cardSection.appendChild(buttonUp);
    buttonUp.onclick = () => {
        window.location.href = "#locations";
    }

    cardSection.style.paddingTop = "7%";
    cardSection.style.paddingBottom = "5%";

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    titleDiv.setAttribute("id", "titleDiv");

    let locationName = document.createElement("h3");
    locationName.innerHTML = location.name;
    let locationPrefecture = document.createElement("h4");
    locationPrefecture.innerHTML = location.prefecture;

    titleDiv.appendChild(locationName);
    titleDiv.appendChild(locationPrefecture);
    cardSection.appendChild(titleDiv);

    location.places.forEach((place) => {
        let card = document.createElement("div");
        card.classList.add("place-card");

        let textAndButton = document.createElement("div");
        textAndButton.classList.add("blur");

        let placeName = document.createElement("h5");
        placeName.innerHTML = place.name;
        if (place.image) {
            const img = new Image();
            img.src = `${place.image}`;
            img.onload = () => {
                card.style.backgroundImage = `url(${place.image})`;
            };
            img.onerror = () => {
                let textAlt = document.createElement("p");
                textAlt.innerHTML = `${place.text}`;
                textAlt.style.textAlign = "center";
                textAlt.style.color = "black";
                textAlt.style.margin = "auto";
                card.prepend(textAlt);
            };
        } else if (place.video) {
            let placeVideo = document.createElement("video");
            placeVideo.setAttribute("muted", "");
            placeVideo.setAttribute("autoplay", "");
            placeVideo.setAttribute("loop", "");
            placeVideo.innerHTML = `${place.text}`;

            let videoSrc = document.createElement("source");
            videoSrc.setAttribute("src", place.video);
            videoSrc.setAttribute("type", "video/mp4");

            placeVideo.appendChild(videoSrc);

            placeVideo.onerror = () => {
                console.log("error");
                let textAlt = document.createElement("p");
                textAlt.innerHTML = `${place.text}`;
                textAlt.style.textAlign = "center";
                textAlt.style.color = "black";
                textAlt.style.margin = "auto";
                card.prepend(textAlt);
            }
            placeVideo.oncanplay = () => {
                card.appendChild(placeVideo);
            }
        }
        let bookNow = document.createElement("button");
        bookNow.innerHTML = "Book now";

        textAndButton.appendChild(placeName);
        textAndButton.appendChild(bookNow);

        card.appendChild(textAndButton);

        cardSection.appendChild(card);
    })

    window.location.href = "#automatised-locations";
}

// create an option for each location of the sorted array and a button for the map
const select = document.getElementById("select-location");
const map = document.getElementById("mapgrid");
locationsFilter.forEach((location) => {
    location.places.sort((a, b) => a.name.localeCompare(b.name));

    let option = document.createElement("option");
    option.value = `${location.name}`;
    option.innerHTML = `${location.name}`;

    let mapButton = document.createElement("button");
    mapButton.classList.add("map-location", `${location.name.replace(/\s+/g, '-')}`);
    let mapIcon = document.createElement("span");
    mapIcon.classList.add("material-icons");
    mapIcon.innerHTML = "location_on";

    mapButton.style.zIndex = "3";
    select.appendChild(option);
    mapButton.appendChild(mapIcon);
    map.appendChild(mapButton);

    let divIndicate = document.createElement("div");
    divIndicate.style.zIndex = "4";
    divIndicate.innerHTML = `${location.name}`;
    mapButton.appendChild(divIndicate);

    // display places cards when we click on a map button or on an option, or press enter on select
    mapButton.addEventListener("click", () => {
        createCards(location);
    })

    select.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const selectedOption = select.options[select.selectedIndex].value;
            const location = locationsFilter.find(loc => loc.name === selectedOption);
            if (location) {
                createCards(location);
            }
        }
    })

    option.addEventListener("click", () => {
        createCards(location);
    })
})
