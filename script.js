/*script pour la flèche de retour en haut*/
document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(event) {
    document.getElementById("back").className = (window.pageYOffset > 100) ? "Visible" : "Invisible";
  };
});

/*script pour les particles*/
particlesJS('particles-js', {
    particles: {
      color: '#1c9494',
      shape: 'circle', // "circle", "edge" or "triangle"
      opacity: 1,
      size: 4,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: '#1c9494',
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 1
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 250
      },
      detect_on: 'canvas', // "canvas" or "window"
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push', // "push" or "remove" (particles)
          nb: 4
        }
      } 
    },
    /* Retina Display Support */
    retina_detect: true
  });

/*observer présentation*/

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
    
    
// script pour le nuage de mots
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'MySql', 'git', 'PHP',
    'Bash', 'Figma', 'Ubuntu',
];

var tagCloud = TagCloud('.content', myTags,{

  radius: 200,

  maxSpeed: 'normal',
  initSpeed: 'normal',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // intéraction avec la souris
  keep: true
  
});

//pour changer la couleur du texte de manière aléatoire
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', '#FFBA01', '#01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;