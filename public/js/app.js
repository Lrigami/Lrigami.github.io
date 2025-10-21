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

// platforms
const rootmepoints = document.getElementsByClassName("root-me-points")[0];
const rootmevalidations = document.getElementsByClassName("root-me-validations")[0];

fetch('/api/rootme')
    .then(r => r.json())
    .then(rootme => {
        rootmepoints.innerText = rootme.score;
        rootmevalidations.innerText = rootme.validations.length;        
    });

const platformModalBtn = document.getElementById("platform-modal-btn");
const platformModal = document.getElementById("platform-modal");
platformModalBtn.addEventListener("click", () => {
    platformModal.classList.toggle("hidden");
});

// projects solar-system effects

// slider management
// get data from projects.json
async function getData() {
    try {
        const projects = "./js/projects.json";
        const response = await fetch(projects);
        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }

        const data = await response.json();

        // create slider project content for each project
        for (const project of data.projects) {
            const projectContainer = document.createElement("div");
            projectContainer.classList.add("slider-project");

            const projectTitle = document.createElement("h3");
            projectTitle.innerText = project.name;

            const projectContent = document.createElement("div");
            projectContent.classList.add("project-content");
            projectContent.style.background = `95% center / 30% auto no-repeat url(${project.design})`;

            const projectVision = document.createElement("div");
            projectVision.classList.add("project-vision");

            const projectVisual = document.createElement("div");
            projectVisual.classList.add("project-visual");

            const projectState = document.createElement("div");
            projectState.innerText = project.state;

            projectState.classList.add(project.state == "Completed" ? "project-state-green" : "project-state-pink");

            const projectImg = document.createElement("img");
            projectImg.src = project.image;
            projectImg.alt = project.alt;

            const projectBtns = document.createElement("div");
            projectBtns.classList.add("project-btns");

            if (project.source !== "") {
                const goToProject = document.createElement("a");
                goToProject.href = project.source; 
                goToProject.target = "_blank";
                goToProject.innerText = "View project";
                projectBtns.appendChild(goToProject);               
            }

            const projectGithub = document.createElement("a");
            projectGithub.href = project.github;
            projectGithub.target = "_blank";
            projectGithub.innerText = "View on GitHub";
            projectBtns.appendChild(projectGithub);

            const projectTechno = document.createElement("div");
            projectTechno.classList.add("project-techno");

            project.tools.forEach(tool => {
                let projectTool = document.createElement("p");
                projectTool.classList.add("project-tool");
                projectTool.innerText = tool;
                projectTechno.appendChild(projectTool);
            })

            projectVisual.appendChild(projectImg);
            projectVisual.appendChild(projectState);
            projectVisual.appendChild(projectBtns);
            projectVision.appendChild(projectVisual);
            projectVision.appendChild(projectTechno);

            const projectAbout = document.createElement("div");
            projectAbout.classList.add('project-about');

            const projectDescriptionContainer = document.createElement("div");
            projectDescriptionContainer.classList.add("project-div");
            const projectDescription = document.createElement("p");
            projectDescription.innerText = project.description;

            projectDescriptionContainer.appendChild(projectDescription);

            projectAbout.appendChild(projectDescriptionContainer);

            projectContent.appendChild(projectVision);
            projectContent.appendChild(projectAbout);

            projectContainer.appendChild(projectTitle);
            projectContainer.appendChild(projectContent);
            document.getElementById("slider-content").appendChild(projectContainer);
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