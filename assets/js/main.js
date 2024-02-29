// Top Links
let H_link   = document.querySelector('#homeLink');
let S_link   = document.querySelector('#skillsLink');
let P_link   = document.querySelector('#projectsLink');
let C_link   = document.querySelector('#contactLink');

let allLinks = document.querySelectorAll('header nav a');

// Pages
pages = document.querySelectorAll('main div');

let H_page   = document.querySelector('.home');
let S_page   = document.querySelector('.skills');
let P_page   = document.querySelector('.projects');
let C_page   = document.querySelector('.contact');

function unActive(){
    allLinks.forEach(link =>{
        link.classList.remove('active');
    });
}

function cleanPages(){
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.skills').style.display = 'none';
    document.querySelector('.projects').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
    
}

function content(current_page){
    cleanPages();

    if (current_page === 'home') {            
        cleanPages();
        
        H_page.style.display = 'flex';

        document.querySelector('main').style.padding = '20px 0px 0px 100px';
    }
    if (current_page === 'skills') {
        S_page.style.display = 'flex';
    }
    if (current_page === 'projects') {
        P_page.style.display = 'flex';
    }
    if (current_page === 'contact') {
        C_page.style.display = 'flex';
    }
}

function activateTab(page) {
    let home     = document.querySelector('.home');

    if (page === 'home') {
        unActive();
        H_link.classList.add('active');
        content('home');
    }
    if (page === 'skills') {
        unActive();
        S_link.classList.add('active');
        content('skills');
    }
    if (page === 'projects') {
        unActive();
        P_link.classList.add('active');
        content('projects');   
    }
    if (page === 'contact') {            
        unActive();
        C_link.classList.add('active');
        content('contact');
    }
}

content('home');