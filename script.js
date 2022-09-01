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
    'Bash', 'Figma', 'Ubuntu', 'WordPress',
];

var tagCloud = TagCloud('.content', myTags,{

  radius: 200,

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

//script validation formulaire
// const envoi = document.getElementById("envoi");
// document.getElementById("envoi").addEventListener("click", function(){
//   envoi.onsubmit();
// })

// function envoi()
// {
//   const lancer="oui";

//   if(document.getElementById("email").value==""){
//     alert("Merci de saisir votre mail");
//     lancer="non";
//   }
//   elseif(document.getElementById("email").value.indexOf("@") ==-1 || document.getElementById("email").value.indexOf(".") == -1 );
//   {
//     alert("Votre mail ne semble pas correct, merci de le corriger");
//     lancer="non";
//   }
//   elseif(document.getElementById("sujet").value == "")
// {
// alert("Vous devez entrer le sujet de votre message");
// lancer="non";
// }
// elseif((document.getElementById("msg").value == "" || document.getElementById("msg").value.length < 10))
// {
// alert("Vous devez renseigner le contenu du message");
// lancer="non";
// }
// if(lancer=="oui")
// document.getElementById("contact").submit();
// }


// const form = document.querySelector("form");
// const submit = document.querySelector("submit");
// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   validation();
// })

// function validation(){
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;



//   if(name.value ==""){
//     document.getElementById('error_msg');
//   }
//   if(email==""){
//     alert("Merci de saisir un mail");
//     return false;
//   }
//   alert("Toutes les données sont valides")
//   return true;
// }

const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
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
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

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
    }
}));