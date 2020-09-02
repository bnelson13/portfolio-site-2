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

let observerOptions = {
    rootMargin: '25px', 
    threshold: 1.0
}

const aboutIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {  
        if (entry.intersectionRatio > 0.2) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(-35px)";
            aboutIO.unobserve(entry.target);
        }
    });
}, observerOptions);

const resLineIO = new IntersectionObserver((entry) => {
    if (entry.intersectionRatio > 0.2) {
        go();
        console.log('resumeintersection');
        resLineIO.unobserve(resumeCards[0]);
    }
})

resLineIO.observe(resumeCards[0]);

function go () {
    var elements = document.getElementsByTagName("animate");
    elements[0].beginElement();
}

for (let card of infoCards) {
    aboutIO.observe(card);
}

for (let card of resumeCards) {
    aboutIO.observe(card);
}

topButton = document.querySelector('#top-link-button');

const showButton = function() {
    let y = window.scrollY;
    if (y>200) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
}
window.addEventListener('scroll', showButton);

let resumePDF = document.querySelector('#resume-button');

resumePDF.addEventListener('click', () => {
    window.open('/src/Brad-Nelson-Resume.pdf', '_blank');
})

let emailButton = document.querySelector('#email-hover');
let phoneButton = document.querySelector('#phone-hover');
let emailAddress = document.querySelector('#email-address');
let phoneNumber = document.querySelector('#phone-number');
let copyInfo = document.querySelectorAll('.hover-info');

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

let cardButtons = document.querySelectorAll('.card-button');
let cardDescriptions = document.querySelectorAll('.card-description');
// cardButton = cardButtons[0];
// console.log(cardButton);

// let buttonOne = document.querySelector('#buttonOne');
// console.log(buttonOne.innerHTML);
// window.setTimeout(function ()
// {
// buttonOne.focus({preventScroll: true});
// },0);
// cardButtons[0].focus({preventScroll: true});
cardButtons.forEach(ele => {
    ele.preventDefault;
    ele.focus({preventScroll: true})
})

cardDescriptions.forEach(ele => {
    ele.preventDefault;
    ele.focus({preventScroll: true});
})