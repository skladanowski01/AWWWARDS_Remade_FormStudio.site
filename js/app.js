import { lerp } from "./utils.js";
import { createProjects, createBlogposts } from "./projects.js";

const main = document.querySelector('main');
const video = document.querySelector('video');
const videoSelection = document.querySelector('#video');

createProjects();
createBlogposts();


main.addEventListener('scroll', () => {
   animateVideo()
})

// VIDEO SECTION
const videoTextOverlayLeft = document.querySelector('.text__overlay__left');
const videoTextOverlayRight = document.querySelector('.text__overlay__right');

function animateVideo(){
    let {bottom} = videoSelection.getBoundingClientRect();
    let scale = 1 - ((bottom - window.innerHeight) * .0005)
    scale = scale < .2 ? .2 : scale > 1 ? 1 : scale;
    video.style.transform = `scale(${scale})`;   
    
    //txt transform
    let textTransform = bottom - window.innerHeight;
    textTransform = textTransform < 0 ? 0 : textTransform;
    videoTextOverlayLeft.style.transform = `translate(${-textTransform}px)`; 
    videoTextOverlayRight.style.transform = `translate(${textTransform}px)`; 
}

//Animations for article about
const textContainer = document.querySelector('.text__container');
const textUp = document.querySelector('.text__down');
const textDown = document.querySelector('.text__up');

function textFromHellAndHaeven(){
    let {bottom} = textContainer.getBoundingClientRect();
    let textTransform = bottom - innerHeight;   
    textTransform = textTransform < 0 ? 0 : textTransform; 
    textUp.style.transform = `translateX(${textTransform}px)`;
    textDown.style.transform = `translateX(${-textTransform}px)`;
}

// JOBS DONE / PROJECTS
const projectsSticky = document.querySelector('.projects__sticky');
const projectSlider = document.querySelector('.projects__slider');

let projectTargetX = 0;
let projectCurrentX = 0;

let percentages = {
    small: 700,
    medium: 300,
    large: 100
}

let limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large

function setLimit(){
    limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large            
}

window.addEventListener('resize', setLimit);

//Animation for jobs done / projects
function animateProjects(){
    let offsetTop = projectsSticky.parentElement.offsetTop;
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight * 100);
    percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .1);
    projectSlider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0, 0)`;
}

//Animation for blog-posts
const blogSection = document.getElementById('blog');
const blogPosts = [...document.querySelectorAll('.post')];

function blogPostsAnimation(){
    let blogSectionTop = blogSection.getBoundingClientRect().top;
    for(let i = 0; i < blogPosts.length; i++){
        if(blogPosts[i].parentElement.getBoundingClientRect().top <= 1){
            
            //+1 to account for the first Blog title div.
            let offset = (blogSectionTop + (window.innerHeight * (i + 1))) * .0005;
            offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
            if(i == 1) console.log(offset);
            blogPosts[i].style.transform = `scale(${1 + offset})`;
        }
    }
}

//Animation for section circle
const circleSection = document.getElementById('circle__section');
const circle = document.querySelector('.circle');

function scrollCircle(){
    let {top} = circleSection.getBoundingClientRect();
    let scaleTop = Math.abs(top);
    let scale = (scaleTop / window.innerHeight);
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;

    if(top <= 0){
        circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
    else{
        circle.style.transform = `translate(-50%, -50%) scale(${0})`;
    }
}

//Animation for section discover
const discoverContainer = document.querySelector('.discover__container');
const discoverTextLeft = document.querySelector('.discover__txt__left');
const discoverTextRight = document.querySelector('.discover__txt__right');

function scrollDiscover(){
    let {bottom} = discoverContainer.getBoundingClientRect();
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    discoverTextLeft.style.transform = `translateX(${-textTrans}px)`;
    discoverTextRight.style.transform = `translate(${textTrans}px)`;
}

//Animation for text reveal
const textReveals = [...document.querySelectorAll('.text__reveal')];

let callback = (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            [...entry.target.querySelectorAll('span')].forEach((span, idx) => {
                setTimeout(() => {
                    span.style.transform = `translateY(0)`;
                }, (idx + 1) * 50)
            })
        }
    })
})

let options = {
    rootMargin: '0px',
    treshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

textReveals.forEach(text => {
    let string = text.innerText;    
    let html = '';
    for(let i = 0; i < string.length; i++){
        html += `<span>${string[i]}</span>`;    }   

    text.innerHTML = html;
    observer.observe(text); 
})



function animate(){
    animateProjects();
    requestAnimationFrame(animate)
}

main.addEventListener('scroll', () => {
    textFromHellAndHaeven();
    blogPostsAnimation();
    scrollCircle();
    scrollDiscover();
})

animate()
