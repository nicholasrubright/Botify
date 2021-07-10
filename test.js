const Botify = require('./lib/Botify');

let botify = new Botify('API_KEY');

botify.Search.gettingByKeyword("tania bowra", "artist")
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
