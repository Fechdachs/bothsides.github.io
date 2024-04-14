function dark(){
    location.href = "Both-Sides/dark/dark.html"
}

function about(){
    location.href = "Both-Sides/about/about.html"
}
function credits(){
    location.href = "Both-Sides/credits/credits.html"
}
function home(){
    location.href = "../home/index.html"
}
function light(){
    location.href = "Both-Sides/light/light.html"
}
function story(){
    location.href = "Both-Sides/story/story.html"
}


let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let title = document.getElementById('title')



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 2.05 + 'px';
    mountains_behind.style.top = value * 1 + 'px';
    mountains_front.style.top = value * 0 + 'px';
})



document.getElementById("AboutMe").onmouseover = function lol() { document.getElementById("txtDiv1").style.display = "block";}
document.getElementById("AboutMe").onmouseout  = function() { document.getElementById("txtDiv1").style.display = "none";}



