/* 
  File: main.js
  Student’s Name: Pham PhucTran Nguyen
  StudentID: 301311763
  Date: Jun 19, 2023
*/


/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggleId && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/*==================== SET ACTIVE LINK ====================*/
function setActiveLink (navId) {
    const items = document.getElementsByClassName('nav__item');
    for(let i = 0; i < items.length ; i++) {
        items[i].classList.remove('active-link');
    }

    const currentItem = document.getElementById(navId);
    currentItem.classList.add('active-link');
}


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


