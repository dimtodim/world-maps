let countries;
let indexCountry;
var ja = document.querySelector(".cards-container");
var lista = document.getElementById("countries");
var allContinet = document.getElementsByClassName("display-card");
var allLinks = document.getElementsByClassName("linkovi");

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));


    function initialize(countriesData) {
    countries = countriesData;

    for (let i=0; i<countries.length; i++) {

        create(i);
        writeData(i);
    }
        
    }

    function create(div) {

        let title1 = "Population: ";
        let title2 = "Region: ";
        let title3 = "Capital: ";

            // create the element
            let newLink = document.createElement("a");
            newLink.className = "linkovi "+countries[div].region.toLowerCase()+" "+div;;
            // add the URL attribute
            newLink.setAttribute("href", "index2.html");
            // Add some text
            newText = document.createTextNode("");
            // Add it to the new hyperlink
            newLink.appendChild(newText);
            // Find the place to put it
            // add this to the DOM in memory



        let newDiv1 = document.createElement('div');
        let newDiv2 = document.createElement('div');
        let newDiv3 = document.createElement('div');
        let img = document.createElement('img');

        newDiv1.className = "display-card "+countries[div].region.toLowerCase()+" "+div;
        newDiv2.id = "flag-container";
        newDiv3.id = "info-container";
        img.id = "slika "+div;

        newDiv2.append(img)
        newDiv1.append(newDiv2, newDiv3);
        
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let span3 = document.createElement('span');
        let span4 = document.createElement('span');

        span1.className = "ime-zemlje";
        span1.id = "country-name "+div;
        span2.id = "brojStanovnika "+div;
        span3.id = "kontinent "+div;
        span4.id = "glavniGrad "+div;

        p1.id = "population";
        p2.id = "region";
        p3.id = "capital-name";

        p1.append(title1);
        p2.append(title2);
        p3.append(title3);

        h2.append(span1);
        p1.append(span2);
        p2.append(span3);
        p3.append(span4);

        newDiv3.append(h2, p1, p2, p3);
        
        newLink.append(newDiv1);
        ja.append(newLink);
    }

    function writeData(imeGrada) {

        document.getElementById("slika "+imeGrada).src = countries[imeGrada].flag;
        document.getElementById("country-name "+imeGrada).innerHTML = countries[imeGrada].name;
        document.getElementById("brojStanovnika "+imeGrada).innerHTML = countries[imeGrada].population.toLocaleString();
        document.getElementById("kontinent "+imeGrada).innerHTML = countries[imeGrada].region;
        document.getElementById("glavniGrad "+imeGrada).innerHTML = countries[imeGrada].capital;

    }

    lista.onchange = function(){
       
                if (this.value == "all") {
                        showAll();
                }if (this.value == "africa"){
                        showAll();
                        showAfrica();
                }if (this.value == "america"){
                        showAll();
                        showAmerica();
                }if (this.value == "asia"){
                        showAll();
                        showAsia();
                }if (this.value == "europe"){
                        showAll();
                        showEuropa();
                }if (this.value == "oceania"){
                        showAll();
                        showOceania();
                }
            
    }

    function showAll(){
        for (var i = 0; i < allLinks.length; i++) {
            allLinks[i].classList.remove('hidden');
        }
    }

    function showAfrica() {
        for (var i = 0; i < allLinks.length; i++) {

            if (!(allLinks[i].classList.contains('africa'))) {
                allLinks[i].classList.add('hidden');
            }
            
        }
    }

    function showAmerica() {
        for (var i = 0; i < allLinks.length; i++) {

            if (!(allLinks[i].classList.contains('americas'))) {
                allLinks[i].classList.add('hidden');
            }
            
        }
    }

    function showEuropa() {
        for (var i = 0; i < allLinks.length; i++) {

            if (!(allLinks[i].classList.contains('europe'))) {
                allLinks[i].classList.add('hidden');
            }
            
        }
    }

    function showAsia() {
        for (var i = 0; i < allLinks.length; i++) {

            if (!(allLinks[i].classList.contains('asia'))) {
                allLinks[i].classList.add('hidden');
            }
            
        }
    }

    function showOceania() {
        for (var i = 0; i < allLinks.length; i++) {

            if (!(allLinks[i].classList.contains('oceania'))) {
                allLinks[i].classList.add('hidden');
            }
            
        }
    }
    

    window.addEventListener('load', function () {
    //search bar    
    let filterInput = document.getElementById('filterInput');
    filterInput.addEventListener('keyup', filterNames);
    
    function filterNames() {
        let filterValue = document.getElementById('filterInput').value.toUpperCase();
        let kartice = allContinet;
        let h2 = document.querySelectorAll('h2');

        for (let i=0;i<h2.length;i++) {
            let name = h2[i].getElementsByClassName("ime-zemlje");

            if (name[0].innerHTML.toUpperCase().search(new RegExp(`^${filterValue}`)) === 0) {
                allLinks[i].style.display = '';
            } else {
                allLinks[i].style.display = 'none';
            }

        }
    }

    let clickMe = document.querySelectorAll('.display-card');

    // save date to local storage and function to check index of click item and index of country
    function saveDateLocaly(index3) {

        countries.forEach(function(drzava, index2){
            if (index3 === index2){

                let saveDateObject = {

                    flag: drzava.flag,
                    name: drzava.name,
                    native: drzava.nativeName,
                    population: drzava.population.toLocaleString(),
                    region: drzava.region,
                    subRegion: drzava.subregion,
                    capital: drzava.capital,
                    topLevelDomain: drzava.topLevelDomain,
                    currencies: drzava.currencies,
                    language: drzava.languages,
                    borders: drzava.borders
                    
                };

                let saveDateObject_serialized = JSON.stringify(saveDateObject);
                localStorage.setItem("saveDateObject", saveDateObject_serialized);
                //this use in new javascript file to get object from local storage
                //let saveDateObject_deserialized = JSON.parse(localStorage.getItem("saveDateObject"));
        
            }
        });

    }
    


    clickMe.forEach(function(hereWeGo, index) {
        
        hereWeGo.addEventListener('click', function() {

                saveDateLocaly(index);

        });
    });


  
});
        
