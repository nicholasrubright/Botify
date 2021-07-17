const BotifyJS = require('./lib/BotifyJS');

let Botify = new BotifyJS('API_KEY');

let test = Botify.Artists.gettingArtistTopTracksById('dkdkd');

// botify.Search.gettingTrackByKeyword("Best Thing")
//     .then(track_info => {
//         const id = track_info.tracks.items[0].id
        
//         botify.Tracks.gettingTrackById(id)
//             .then(data => {
//                 console.log(data);
//             })

//     });



//let test = botify.Search.gettingTrackByKeyword("Best Thing");

//let test = botify.Tracks.gettingTrackById("peepee1");

//console.log(test);