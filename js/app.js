const sections = document.querySelectorAll('section');
const ul = document.createElement('ul');
document.getElementById('navbar__list').appendChild(ul);
//loop through elements to grab the data-nav elements
for (let i = 0; i < sections.length; i++) {    
    const section = sections[i];    
    const li = document.createElement('li');    
    li.setAttribute('id', section.dataset.nav)    
    li.addEventListener('click', function clickHandler() {     
        location.hash = section.id;

        currentSection = document.querySelector(`[data-nav="${this.id}"]`);

        console.log(currentSection)    
        const allSections = document.querySelectorAll('section');
        const allSectionArray = Array.prototype.slice.call(allSections);

        // remove class from sibling sections     
        allSections.forEach((section) => {               
            section.classList.remove('active');      
        })       

        //checking if section is in viewport -- logic borrowed from https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
        var isInViewport = function(section) {
            var bounding = currentSection.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        // on scroll add active class
        window.addEventListener('scroll', function(event) {
            if (isInViewport(currentSection)) {
                currentSection.classList.add('active'); 
            }
        }, false);

        const allLi = ul.querySelectorAll('li');      
        allLi.forEach((li) => {               
                li.classList.remove('active');     
            })        
            // remove class from sibling section links
        this.classList.add('active');    
    });    
    li.textContent = section.dataset.nav;    
    ul.appendChild(li);
};

// Build menu 

// Scroll to section on link click

// Set sections as active


