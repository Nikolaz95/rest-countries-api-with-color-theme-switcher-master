 
 
 const countries = document.querySelector('.countries')
 
 async function getCountry () {
    const url = await fetch('https://restcountries.com/v3.1/all');
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });
}

getCountry()
function showCountry(data)  {
    const country = document.createElement('div')
    country.classList.add('country')
    country.innerHTML= `
    <div class="country-flag">

    <img src="${data.flags.png}" alt="here should be a picture"/>

    </div>
    
  <div class="country-info">
    <h4 class="countryName">${data.name.common}</h4>
    <p><strong>Population:</strong>${data.population}</p>
    <p class="regionName"><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
  </div>`;

  countries.appendChild(country)
}

/* toggle dropdown */

const dropDown = document.querySelector('.dropdown-menu')
const dropElem = document.querySelector('.drop')

dropDown.addEventListener('click', () => {
  dropElem.classList.toggle('showDropDown')
  console.log("hello")
})


/* selectors */

const regionName = document.getElementsByClassName('regionName')
const countryName = document.getElementsByClassName('countryName')
const region = document.querySelectorAll('.region')

region.forEach(element => {
  element.addEventListener('click', () => {
    console.log(element)
    Array.from(regionName).forEach(elem => {
      if(elem.innerText.includes(element.innerText) || element.innerText =="All"){
      elem.parentElement.parentElement.style.display="grid"
    } else (
      elem.parentElement.parentElement.style.display="none"
    )
  })
  })
})  

/* searc country function */

const searchCountry = document.querySelector('.searchCountry')

searchCountry.addEventListener('input', () => {
  Array.from(countryName).forEach(elem => {
    if(elem.innerText.toLowerCase().includes(searchCountry.value.toLowerCase())){
    elem.parentElement.parentElement.style.display="grid"
  } else (
    elem.parentElement.parentElement.style.display="none"
  )
})
})

/* toogle switch dark mode , light mode */

const btn = document.getElementById('toggle-button');

const darkMode = document.querySelector('ball');

btn.addEventListener('change', () => {
	document.body.classList.toggle('toogle-off');
});

