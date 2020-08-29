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
.tiType("I'm Bad, wel")
.tiDelete(7)
.tiType('rad. Welcome!')
.tiPause(2000)
.tiDelete(18)
.tiType('Brad Nelson')

setTimeout(function() {$('#typewrite').find('.ti-cursor').addClass('is-hidden')}, 16300);
setTimeout(function() {document.querySelector('#down-svg').classList = 'welcome-down-svg'}, 16300)

/* Slow scroll to internal links */
//Puts all a tags with # targets in nodeList
let anchorLinks = document.querySelectorAll('a[href^="#"]')
//Iterates through each a tag
for (let anchorLink of anchorLinks) { 
    //Applies click listener on each tag and a function
    anchorLink.addEventListener('click', (e)=> {
        //Identify each links target
        let anchorValue = anchorLink.getAttribute('href')
        let anchorTarget = document.querySelector(anchorValue)
        //Uses behavior of scroll method to make it slow
        anchorTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        //Updates browswer url so it doesn't default to jumping to link
        history.pushState(null, null, anchorValue)
        //Prevents the link from functioning as normal
        e.preventDefault()
    })
}

(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 100);
}(" // BRAD NELSON - Front End Web Developer"));