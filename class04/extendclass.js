class Media {
    constructor(info){
        this.publishdate = info.publishdate;
        this.name = info.name;
    }
}
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong =new Song({
    artist : 'Queen',
    name : " beeyahh",
    publishdate : 2002

});
console.log(mySong);