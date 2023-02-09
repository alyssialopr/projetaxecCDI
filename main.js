// Faire apparaitre le modal
const button = document.getElementById('newpost');

const modal = document.getElementById('modale');

const close = document.getElementById('close');

button.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

// Bouton suppression
const trash = document.getElementById('delete');

const bye = document.getElementById('effacable')

trash.onclick= function() {
    bye.remove()
}

// Effet flou sur tout l'écran
const blur = document.querySelector('.row')

window.addEventListener('scroll', function() {
    const scrollDistance = window.pageYOffset

    blur.style.filter = `blur(${scrollDistance / 900}px)`;
});



// Envoyer vers la page d'inscription
const envoi = document.getElementById('register')

envoi.onclick= function() {
    window.location.href = 'html/inscription.html'
}

// Envoyer vers la page de connexion 
const connexion = document.getElementById('utilisateur')

connexion.onclick= function() {
    window.location.href = 'html/connexion.html'
}




// Local Storage
const text = document.querySelector('textarea');

const storageKey = 'text';

const init = () => {
  
    text.value = localStorage.getItem(storageKey);
    
    text.addEventListener('input', () => {
      localStorage.setItem(storageKey, text.value);
    });
  }
  
  init();

// Side navbar
const btnnav = document.getElementById('burger');

const navbar = document.getElementById('sidenavbar');

const closed = document.getElementById('closed');

btnnav.onclick = function() {
    navbar.style.display = "block";
}

closed.onclick = function() {
    navbar.style.display = "none";
}




// Filtre
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("statut");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
//   }
// }

// function AddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//       if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//    }
// }

// function RemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//       while (arr1.indexOf(arr2[i]) > -1) {
//         arr1.splice(arr1.indexOf(arr2[i]), 1);     
//       }
//     }
//     element.className = arr1.join(" ");
//   }

// var btnContainer = document.getElementById("tag");
// var btns = btnContainer.getElementsByClassName("btn");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function(){
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }