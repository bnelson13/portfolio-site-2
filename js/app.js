$('#typewrite').typeIt({
    speed: 125,
    breakLines: false,
    lifeLike: true,
    autoStart: true,
    loop: false,
    html: true,
})
.tiPause(2000)
.tiType("Hello. ")
.tiPause(500)
.tiDelete(2)
.tiType('! ')
.tiPause(2000)
.tiDelete(7)
.tiType("I'm Bad. Wel")
.tiDelete(7)
.tiType('rad. Welcome!')
.tiPause(2000)
.tiDelete(18)
.tiType('Brad Nelson')

setTimeout(function() {$('#typewrite').find('.ti-cursor').addClass('is-hidden')}, 16300);
setTimeout(function() {document.querySelector('#down-svg').classList = 'welcome-down-svg'}, 16300)
let anchorLinks = document.querySelectorAll('a[href^="#"]')
for (let anchorLink of anchorLinks) { 
    anchorLink.addEventListener('click', (e)=> {
        let anchorValue = anchorLink.getAttribute('href')
        let anchorTarget = document.querySelector(anchorValue)
        anchorTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, anchorValue)
        e.preventDefault()
    })
}

let infoCards = document.querySelectorAll('.info-card');
let resumeCards = document.querySelectorAll('.resume-item')
const navBar = document.querySelector('.nav-bar');
const aboutSection = document.querySelector('.about-section')

const options = {
    root: null, //kept as viewport
    threshold: 0, //between 0 -> 1
    rootMargin: '-150px', 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('card-active');
        observer.unobserve(entry.target);
    })
}, options)

for (let card of infoCards) {
    observer.observe(card);
}

for (let card of resumeCards) {
    observer.observe(card);
}

topButton = document.querySelector('#top-link-button');

const showButton = function() {
    let y = window.scrollY;
    if (y>200) {
        topButton.style.display = 'block';
        navBar.classList.add('nav-highlight');
    } else {
        topButton.style.display = 'none';
        navBar.classList.remove('nav-highlight');
    }
}
window.addEventListener('scroll', showButton);

let resumePDF = document.querySelector('#resume-button');

resumePDF.addEventListener('click', () => {
    window.open('/src/Brad-Nelson-Resume.pdf', '_blank');
})

const gitButton = document.querySelector('#git-hover');
const linkedButton = document.querySelector('#linked-hover');
const emailButton = document.querySelector('#email-hover');
const phoneButton = document.querySelector('#phone-hover');
const instaButton = document.querySelector('#insta-hover');

const gitHub = document.querySelector('#git-hub');
const linkedIn = document.querySelector('#linked-in');
const emailAddress = document.querySelector('#email-address');
const phoneNumber = document.querySelector('#phone-number');
const instagram = document.querySelector('#instagram');

const copyInfo = document.querySelectorAll('.hover-info');

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
gitButton.onmouseover = () => {
    gitHub.style.display = 'block';
}
gitButton.onmouseout = () => {
    gitHub.style.display = 'none';
}
linkedButton.onmouseover = () => {
    linkedIn.style.display = 'block';
}
linkedButton.onmouseout = () => {
    linkedIn.style.display = 'none';
}
emailButton.onmouseover = () => {
    copyInfo[0].style.display = 'block';
    emailAddress.style.display='block';
}
emailButton.onmouseout = () => {
    copyInfo[0].style.display = 'none';
    emailAddress.style.display='none';
}
emailButton.onclick = () => {
    copyToClipboard('bnelson13@gmail.com');
}
phoneButton.onmouseover = () => {
    copyInfo[1].style.display = 'block';
    phoneNumber.style.display = 'block';
}
phoneButton.onmouseout = () => {
    copyInfo[1].style.display = 'none';
    phoneNumber.style.display = 'none';
}
phoneButton.onclick = () => {
    copyToClipboard('3038845392');
}
instaButton.onmouseover = () => {
    instagram.style.display = 'block';
}
instaButton.onmouseout = () => {
    instagram.style.display = 'none';
}