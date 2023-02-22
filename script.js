/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~script pour la flèche de retour en haut~de la page~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(event) {
    document.getElementById("back").className = (window.pageYOffset > 100) ? "Visible" : "Invisible";
  };
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~script pour les particles~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
if (window.matchMedia("(min-width: 992px)").matches) {
    var particle = 150;
    /*taille du radius en taille min desktop*/
  } else {
    var particle = 50;
    /*taille du radius en responsive*/
  }


particlesJS('particles-js', {
    particles: {
      color: '#1c9494',
      shape: 'circle', // "circle", "edge" or "triangle"
      opacity: 1,
      size: 4,
      size_random: true,
      nb: particle,
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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~menu burger~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const menuBurger = document.querySelector(".menu_burger");
const rubrics = document.querySelector(".rubrics");
const links = document.querySelectorAll(".rubrics li");

/*let car on change les valeurs, le modulo sert à savoir si c'est ouvert ou fermé*/
let modulo = 1;
menuBurger.addEventListener('click', ()=>{
    //on incrémante le modulo au click
    modulo++;
    if(modulo % 2 === 0){
        
        rubrics.classList.add("open");
        
        links.forEach(link => {
            //animation fade de chaque link
            link.classList.add("fade");
            link.addEventListener('click', ()=>{
                modulo=1;
                closingMenu();
            })
        });
        
        //changer le burger en croix
        menuBurger.classList.add("toggle");
    }else{
        closingMenu();
    } 
});

function closingMenu(){
    //ferme le menu
    rubrics.classList.remove("open");
    //retire l'animation de chaque lien
    links.forEach(link => {
        link.classList.remove("fade");
    });
    
    //remettre le burger
    menuBurger.classList.remove("toggle");
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~observer présentation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

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
    
    
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~script pour le nuage de mots~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'MySql', 'git', 'PHP',
    'Bash', 'Figma', 'Ubuntu',
];

if (window.matchMedia("(min-width: 992px)").matches) {
    var radius = 200;
    /*taille du radius en taille min desktop*/
  } else {
    var radius = 150;
    /*taille du radius en responsive*/
  }

var tagCloud = TagCloud('.content', myTags,{

    radius: radius,
  

  maxSpeed: 'slow',
  initSpeed: 'slow',

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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~messages erreurs formulaire de contact~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const form = document.querySelector('#signup');

const checkUsername = () => {

    let valid = false;

const username = document.getElementById('name');

    if (username.value=="") {
        showError(username, 'Merci de saisir un nom');
    }else {
        showSuccess(username);
        valid = true;
    }
    return valid;
};

const emailEl = document.querySelector('#email');

const checkEmail = () => {
    let valid = false;

    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Merci de saisir un email');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Cet email est invalide')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkSujet = () => {

    let valid = false;

const sujet_error = document.getElementById('sujet');

    if (sujet_error.value=="") {
        showError(sujet_error, 'Merci de saisir un sujet');
    }else {
        showSuccess(sujet_error);
        valid = true;
    }
    return valid;

};

const checkMsg = () => {

    let valid = false;


const msg_error = document.getElementById('msg');

    if (msg_error.value=="") {
        showError(msg_error, 'Merci de saisir un message');
    }else {
        showSuccess(msg_error);
        valid = true;
    }
    return valid;

};


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const success = formField.querySelector('small');
    success.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isSujetValid = checkSujet(),
        isMsgValid = checkMsg();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isSujetValid &&
        isMsgValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'sujet_error':
            checkSujet();
            break;
        case 'msg_error':
            checkMsg();
            break;
    }
}));

// menu burger

const openMobileMenuBtn = document.querySelector(".device-menu");
const headerMenu = document.querySelector(".header-nav");

openMobileMenuBtn.addEventListener("click", () => {
  if(openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
  } else {
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
  }
})