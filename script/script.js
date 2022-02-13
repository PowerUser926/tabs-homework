let tabLinks = document.querySelectorAll('.tabLink');
let tabContents = document.querySelectorAll('.tabContent');

tabLinks.forEach(tablink => {
    tablink.addEventListener('click', (e)=>{
        activateTab(e.target);
    }) 
});

function activateTab (tabLink){
    let dataLink = tabLink.getAttribute('data-link');

    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('tabLinkActive');
    });

    tabContents.forEach(tabContent => {
        if(tabContent.id == dataLink){
            tabLink.classList.add('tabLinkActive');
            tabContent.classList.add('tabContentActive');
        } else {
            tabContent.classList.remove('tabContentActive');
        }
    });
}