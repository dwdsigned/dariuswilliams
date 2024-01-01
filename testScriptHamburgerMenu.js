// Grabs the UL element for mobile menu
const hamburgerMenuElement = document.querySelector('#hamburger__menu');
// Grabs all sections elements
const sectionElements = document.querySelectorAll('section');
// Grab all h1 elements
const headerElements = document.querySelectorAll('h1');
// 

// **************************************************

// Grabs the Ul element for the desktop menu
// const navMenu = document.querySelector('#navbar__list');

// **************************************************


// Dynamically builds a navigation menu for mobile Hamburger Menu
function buildHamburgerMenuLinks() {
    // For loop to iterate through all the section elements
    for (i = 0; i < sectionElements.length; i++) {
        // Assigns section based on its position in the nodelist
        const section = sectionElements[i];
        // Assigns the id of the corresponding section
        const sectionId = section.id;
        // Assigns dataset attribute to a variable
        const dataNavigate = section.dataset.nav;
        // Generates Headers Dynamically
        // headerElements[i].textContent = dataNavigate;
        // Create li element
        const navListElement = document.createElement('li');
        // Create anchor element
        const navAnchorElement = document.createElement('a');
        // Sets the visible text of anchor tags to the value of the dataset value(s)
        navAnchorElement.textContent = dataNavigate;
        // Sets the href of anchor elements
        navAnchorElement.href = `#${sectionId}`;
        // Adds the 'menu__link' class to every anchor element
        // navAnchorElement.classList.add('menu__link');
        // Click Event listener for the anchor element allowing smooth scrolling when clicking on the anchor element
        navAnchorElement.addEventListener('click', function(event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth'});
        });
        // Adds the anchor element that was created to the li element that was created
        navListElement.appendChild(navAnchorElement);
        // Adds the li element with anchor element to the ul element
        hamburgerMenuElement.appendChild(navListElement);
    };
  }


//   Calls hamburger menu
buildHamburgerMenuLinks();