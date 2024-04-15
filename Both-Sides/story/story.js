function dark(){
    location.href = "../dark/dark.html"
}

function about(){
    location.href = "../about/about.html"
}
function credits(){
    location.href = "../credits/credits.html"
}
function home(){
    location.href = "../home/index.html"
}
function light(){
    location.href = "../light/light.html"
}
function story(){
    location.href = "../story/story.html"
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});




const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));