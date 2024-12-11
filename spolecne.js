const tlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const ikona = tlacitko.querySelector('i'); 


tlacitko.addEventListener('click', () => {
  if (menuPolozky.classList.contains('show')) {
    menuPolozky.classList.remove('show');
    ikona.classList.remove('fa-xmark');
    ikona.classList.add('fa-bars');
  } else {
    menuPolozky.classList.add('show');
    ikona.classList.remove('fa-bars');
    ikona.classList.add('fa-xmark');
  }
});
