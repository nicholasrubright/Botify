const Botify = require('./lib/Botify');

let botify = new Botify('API_KEY');



botify.Search.gettingTrackByKeyword("Best Thing")
    .then(track_info => {
        const id = track_info.tracks.items[0].id
        
        botify.Tracks.gettingTrackById(id)
            .then(data => {
                console.log(data);
            })

    });

//let test = botify.Search.gettingTrackByKeyword("Best Thing");

//let test = botify.Tracks.gettingTrackById("peepee1");

//console.log(test);