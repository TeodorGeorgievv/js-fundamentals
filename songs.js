function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let n = Number(input.shift());
    let songs = [];

    for (let i = 0; i < n; i++) {
        let inputLine = input.shift();
        let [type, name, time] = inputLine.split('_');
        songs.push(new Song(type, name, time));
    }

    let searchType = input.shift();

    if(searchType === 'all') {
        printSongs(songs);
    } else{
        let searchedSongs = songs.filter((s) => s.type === searchType);
        printSongs(searchedSongs)
    }

    function printSongs(songs) {
        for (let song of songs) {
            console.log(song.name);
        }
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )