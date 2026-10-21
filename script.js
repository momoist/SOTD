const genres = ["Rock", "Pop", "Jazz"];
const selectedGenres = new Set(); 

// Source - https://stackoverflow.com/a/1947531
// Posted by Andy E, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-19, License - CC BY-SA 3.0

var el = document.getElementById("addGenre");
if (el.addEventListener)
    el.addEventListener("click", addGenre, false);
else if (el.attachEvent)
    el.attachEvent('onclick', addGenre);

function initDate() {
    var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var now = new Date();
    var dateString = monthName[now.getMonth()] + " " + now.getDate();
    document.getElementById("date").innerHTML = dateString;
    document.getElementById("weekday").innerHTML = dayName[now.getDay()];
};

function initChips() {
    const genreList = document.getElementById("genrechips");
    for (const g of genres) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.textContent = g;
        chip.className = "chip";
        genreList.appendChild(chip);
    };
};

function addGenre() {
    const inputBox = document.getElementById("newGenre");
    var newEntry = inputBox.value;
    var flag = false
    for (const element of genres) {
        if (element == newEntry) {
            flag = true;
        };
    };
    if (flag == false) {
        genres.push(newEntry);
        const genreList = document.getElementById("genrechips");
        const chip = document.createElement("button");
        chip.type = "button";
        chip.textContent = newEntry;
        chip.className = "chip";
        genreList.appendChild(chip);
    };
};

initChips(); 