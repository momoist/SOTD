window.onload = initDate;
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

function createChips() {
    const genreList = document.getElementById("genrechips");
    for (const g of genres) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.textContent = g;
        chip.className = "chip" + (selected.has(g) ? " on" : "");
        chip.onclick = () => {
            selected.has(g) ? selected.delete(g) : selected.add(g);
            createChips();
        };
        genreList.appendChild(chip);
    }
};

function addGenre() {
    /*window.alert("hello");
    const inputBox = document.getElementById("addGenre");
    var newEntry = inputBox.innerHTML;
    newEntry = newEntry.trim();
    inputBox.innerHTML = "hello"; 
    genres.push(newEntry);
    createChips(); */
    console.log("hi");
};

createChips(); 