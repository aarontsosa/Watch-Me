var URL = "http://www.omdbapi.com"
data = {
    "s": "star wars",
    "apikey": "1ca32dee"
}
$.get(URL, data, function(data){
    console.log(data)
})

// var URL2 = "http://img.omdbapi.com/?i=tt3896198&h=600&apikey=1ca32dee"
// var data = {
//     "t": "dunkirk",
//     "apikey":"1ca32dee"
// }

// $.get(URL2, function(data){
//     (data)
// })