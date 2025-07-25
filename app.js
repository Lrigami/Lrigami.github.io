// parallax effects
let parallax = document.querySelectorAll(".parallax");
let parallaxL = document.querySelectorAll(".parallaxL");
let parallaxR = document.querySelectorAll(".parallaxR");
let parallaxB = document.querySelectorAll(".parallaxB");

window.addEventListener("scroll", () => {
    if (window.innerWidth < 450) return;
    
    let scroll = window.scrollY;

    parallaxL.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(-${scroll * speed}px)`;
    })

    parallaxR.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(${scroll * speed}px)`;
    })

    parallaxB.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
});

// navigation

let mobileMenuContainer = document.getElementById("mobile-menu-container");
let mobileMenu = document.getElementById("mobile-menu");
let burgerMenuBtn = document.getElementById("burger-menu");
let mobileMenuList = document.getElementById("mobile-menu-list");

burgerMenuBtn.onclick = () => {
    mobileMenuContainer.style.width === '100%' ? mobileMenuContainer.style.width = '0px' : mobileMenuContainer.style.width = '100%';
    mobileMenuContainer.style.width === '100%' ? mobileMenuContainer.style.backgroundColor = 'rgb(44, 7, 100, 0.8)' : mobileMenuContainer.style.backgroundColor = 'none';
    burgerMenuBtn.classList.toggle("close");
    mobileMenuList.classList.toggle("close-list");
}


// projects solar-system effects

// slider management
// get data from data.json
async function getData() {
    const json = "./data.json";
    try {
        const response = await fetch(json);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }

        const data = await response.json();

        // create slider project content for each project
        for (const project of data.projects) {
            const projectContent = document.createElement("div");
            projectContent.classList.add("slider-project");

            const projectViewport = document.createElement("iframe");
            projectViewport.src = project.source;

            const projectDiv = document.createElement("div");

            projectDiv.innerHTML = `<p><span class="info">Name: </span>${project.name}</p>
            <p><span class="info">Description: </span>${project.description}</p>
            <p id="tools"><span class="info">Languages & Techno: </span></p>`;

            const lastP = projectDiv.querySelector("p:last-of-type");

            for (const tool of project.tools) {
                const projectTool = document.createElement("span");
                projectTool.classList.add("tool");
                projectTool.innerText = `${tool}`;
                lastP.appendChild(projectTool);
            }

            projectDiv.innerHTML += `<p><span class="info">GitHub: </span><a href=${project.github} target="_blank">Project on GitHub</a></p>`;

            let planetDesign = document.createElement("img");
            planetDesign.src = project.design;
            planetDesign.classList.add("planet-design");

            projectContent.appendChild(planetDesign);
            projectContent.appendChild(projectViewport);
            projectContent.appendChild(projectDiv);

            document.getElementById("slider-content").appendChild(projectContent);
        }

    } catch (error) {
        console.error(error.message);
    }
}
getData();

let slider = document.getElementById("projects-slider");
let planets = document.querySelectorAll(".project a");

// slider navigation
let previousButton = document.getElementById("slider-before");
let nextButton = document.getElementById("slider-after");

previousButton.onclick = () => {
    const sliderContent = document.getElementById("slider-content");
    const sliderWidth = sliderContent.offsetWidth;
    sliderContent.scrollLeft -= sliderWidth;
}

nextButton.onclick = () => {
    const sliderContent = document.getElementById("slider-content");
    const sliderWidth = sliderContent.offsetWidth;
    sliderContent.scrollLeft += sliderWidth;
    const scrollLeft = sliderContent.scrollLeft;
    const sliderProject = document.querySelectorAll(".slider-project");
}

// When I click on a planet, the slider display the right project                           
// Use findIndex() instead of a for loop ? 
planets.forEach((planet) => {
    planet.addEventListener("click", () => {
        let position = planet.id.replace("planet", "");
        showSlider(position);

        // When I click outside of the slider, it disappears and scrollLeft resets to 0
        function handleClickOutside(event) { 
            if (!slider.contains(event.target) && event.target !== planets[position-1]) {
                const sliderContent = document.getElementById("slider-content");
                sliderContent.scrollLeft = 0;
                slider.style.display = "none";
                document.removeEventListener("click", handleClickOutside);
            }
        }

        document.addEventListener("click", handleClickOutside);
    })
})

function showSlider(p) {
    slider.style.display = "flex";
    const sliderContent = document.getElementById("slider-content");
    let sliderWidth = sliderContent.offsetWidth;
    sliderContent.scrollLeft = (sliderWidth * (p-1));
}