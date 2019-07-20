let dataTheme = this.document.querySelectorAll('html');
function saveTheme(dataTheme) {
    dataTheme.forEach(function(dataTheme){

        let saveDataTheme = {
            theme: dataTheme.getAttribute('data-theme')
        }

        console.log("save theme: "+saveDataTheme.theme);

        let saveDataTheme_serialized = JSON.stringify(saveDataTheme);
        localStorage.setItem("saveDataTheme", saveDataTheme_serialized);
    })

}

var checker = document.querySelector('input[name=theme]');
const icon = document.querySelector('i');
const mode = document.getElementById('mode');

//save checker state to local storage
function save(){
    var checkbox = document.getElementById('switch');
    localStorage.setItem('switch', checkbox.checked);
}

//load checker state
function load(){    
    var checked = JSON.parse(localStorage.getItem('switch'));
    document.getElementById("switch").checked = checked;
    let saveDataTheme_deserialized = JSON.parse(localStorage.getItem("saveDataTheme"));
    console.log("load je: "+saveDataTheme_deserialized.theme);
    document.documentElement.setAttribute('data-theme', saveDataTheme_deserialized.theme);
    if  (saveDataTheme_deserialized.theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        mode.innerHTML = 'Light Mode';
        } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        mode.innerHTML = 'Dark Mode';
        }
}

function wis(){
    location.reload();
    localStorage.clear()

}

load();

checker.addEventListener('change', function(){

        if  (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            mode.innerHTML = 'Light Mode';
            save();
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            mode.innerHTML = 'Dark Mode';
            save();
        } 
        saveTheme(dataTheme);
    })