const genres = ["Rock", "Pop", "Jazz"];
const selectedGenres = new Set(); 

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://aqwewhtbclsofnrvvqjf.supabase.co', 'sb_publishable_s-ITAmB0d6szJ7sy1sFCcw_7H1Pge4C', 'auth.persistSession = true')

// Source - https://stackoverflow.com/a/1947531
// Posted by Andy E, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-19, License - CC BY-SA 3.0

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
        chip.className = "chip";
        genreList.appendChild(chip);
    };
};

async function saveAlbum() {
    // pass
};

initChips(); 