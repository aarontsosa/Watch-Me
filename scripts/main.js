var URL = "http://www.omdbapi.com"

var data = {
    "s": "",
    "apikey": "1ca32dee"
}

function getSearch() {
    return $('[data-search="trigger"]').val();
    
}

function searchMovie(){
    $search = getSearch();
    data["s"] = $search
}

function displaySearch(info){
    for(i=0; i<4; i++){
    title = info["Search"][i]["Title"]
    year = info["Search"][i]["Year"]
    poster = info["Search"][i]["Poster"]
    $('[data-result="target"]')[i].textContent = (title + " " + year)
    $('[data-poster="target"]')[i].attributes[0].value = poster
    }
}
function displayPoster(info){
    poster = info["Search"][0]["Poster"]
    
}

$('[data-button="trigger"]').on('click', function(event){
    event.preventDefault();
    searchMovie();
    var promise = $.get(URL, data);
    promise
        .then(displaySearch)
})