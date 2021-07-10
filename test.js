const Botify = require('./lib/Botify');

let botify = new Botify('API_KEY');

// botify.Search.gettingByKeyword("tania bowra", "artist")
//     .then(res => console.log(res.data))
//     .catch(err => console.error(err));


botify.Search.gettingArtistByKeyword("bbno$")
    .then(response => console.log(response))
    .catch(err => console.error("error: " + err));