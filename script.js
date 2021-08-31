const slideNav = document.querySelector('.slide-nav');
const nav = document.querySelector('nav');

// Event Listeners
slideNav.addEventListener('click', slideChange);
nav.addEventListener('mouseover', underlinetoggle);
nav.addEventListener('mouseout', underlinetoggle);


// Functions
function slideChange(event){
    // body tags second class holds slide number
    if(event.target.classList[0] === 'left-button'){
        // find slide currently on
        var slideNum = document.querySelector('.row1').classList[1];

        // switch back to 3 if already on first slide
        if(slideNum === '1'){
            document.querySelector('.row1').classList.toggle(slideNum);
            document.querySelector('.row1').classList.toggle(3);
        }
        // iterate normaly
        else{
            document.querySelector('.row1').classList.toggle(slideNum);
            slideNum--;
            document.querySelector('.row1').classList.toggle(slideNum);
        }

    }else if(event.target.classList[0] === 'right-button'){
        // find slide currently on
        var slideNum = document.querySelector('.row1').classList[1];

        // switch back to 3 if already on first slide
        if(slideNum === '3'){
            document.querySelector('.row1').classList.toggle(slideNum);
            document.querySelector('.row1').classList.toggle(1);
        }
        // iterate normaly
        else{
            document.querySelector('.row1').classList.toggle(slideNum);
            slideNum++;
            document.querySelector('.row1').classList.toggle(slideNum);
        }
    }
    
    // Edit Content
    var switchSlide = document.querySelector('.row1').classList[1];
    const row1img = document.querySelector('.row1-img');
    const row1head = document.querySelector('.row1-text-head');
    const row1body = document.querySelector('.row1-text-body');
    switch(switchSlide){
        case '1':
            row1img.classList.toggle(row1img.classList[1]);
            row1img.classList.toggle('img-1');
            row1head.innerText = 'Discover innovative ways to decorate';
            row1body.innerText = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
            break;
        case '2':
            row1img.classList.toggle(row1img.classList[1]);
            row1img.classList.toggle('img-2');
            row1head.innerText = 'We are available all across the globe';
            row1body.innerText = 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.';
            break;
        case '3':
            row1img.classList.toggle(row1img.classList[1]);
            row1img.classList.toggle('img-3');
            row1head.innerText = 'Manufactured with the best materials';
            row1body.innerText = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.';
            break;
        default: 
            console.log('something went wrong fuckup');
            break;
    }
}

function underlinetoggle(e){
    if(e.target.classList[0] === 'nav-link'){
        // create new div and style it
        const underline = e.target.querySelector('div');
        underline.classList.toggle('white');
    }
}

function burgerClick(){
    // toggle burger X and |||
    const burger = document.querySelector('.nav-burger');
    if(burger.classList.contains('burger-close')){
        burger.classList.toggle('burger-close');
        burger.src = "./images/icon-hamburger.svg";

    }else{
        burger.classList.toggle('burger-close');
        burger.src = "./images/icon-close.svg";
    }

    // affect nav links
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-active');
    for(let x = 0; x < nav.children.length; x++){
        if(nav.children[x].classList[0] === 'nav-link'){
            nav.children[x].classList.toggle('dn');
        }
    }
}