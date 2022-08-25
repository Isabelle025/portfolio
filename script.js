/*observer présentation start*/

const firstChapter = document.querySelector(".first_chapter");
const secondChapter = document.querySelector(".second_chapter");

const callback = function( entries ) {

    let observedImg = entries[0];

    if (!observedImg.isIntersecting) {
        observedImg.target.style.transition = 'none';
        observedImg.target.style.opacity = '0%';
        if (observedImg.target == firstChapter ){
        observedImg.target.style.transform = 'translateX(-100%)';
        } else if (observedImg.target == secondChapter ){
            observedImg.target.style.transform = 'translateX(100%)';
        }
    }else{
        observedImg.target.style.transition = 'all 1s ease-in-out';
        observedImg.target.style.transform = 'translateX(0px)';
        observedImg.target.style.opacity = "100%";
    } 
};


    const observer = new IntersectionObserver(callback);
    observer.observe(firstChapter);    
    observer.observe(secondChapter);
