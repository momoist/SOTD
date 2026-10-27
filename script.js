const genres = ["Rock", "Pop", "Jazz"];
const selectedGenres = new Set(); 

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://aqwewhtbclsofnrvvqjf.supabase.co', 'sb_publishable_s-ITAmB0d6szJ7sy1sFCcw_7H1Pge4C', 'auth.persistSession = true')

var el = document.getElementById("addGenre");
if (el.addEventListener)
    el.addEventListener("click", addGenre, false);
else if (el.attachEvent)
    el.attachEvent('onclick', addGenre);

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
        if (selectedGenres.has(chip)) {
            chip.className = "chip on";
        } else {
            chip.className = "chip";
        };
        chip.onclick = () => {
            if (selectedGenres.has(chip)) {
                selected.delete(chip);
            } else {
                selected.add(chip);
            }
            initChips();
        };
        genreList.appendChild(chip);
    };
};

async function saveAlbum() {
    //should be run when the submit button is clicked
    // take in values from entered form
    const today = new Date().toLocaleDateString("en-CA");
    const albumname = document.getElementById("albumname").value;
    const artistname = document.getElementById("artistname").value;
    const datereleased = document.getElementById("datereleased").value;
    const datelistened = document.getElementById("datelistened").value;
    const albumrating = document.getElementById("albumrating").value;
    const nosongs = document.getElementById("nosongs").value;
    const noskips = document.getElementById("noskips").value;
    const genreschosen = 1;

    const { dberror } = await db // keep error from database pushing
    .from("albums")
    .upsert( //add to database
        {
        entry_date: today,
        album_name: albumname,
        artist_name: artistname,
        date_released: datereleased,
        date_listened: datelistened,
        rating: albumrating,
        no_songs: nosongs,
        no_skips: noskips,
        genres: genreschosen,
        comments: albumcomments
        }
    );
};

initChips(); 