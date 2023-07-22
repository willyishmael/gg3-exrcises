let playlist = [
    { title: 'Always', artist: ['Daniel Caesar'], album: 'NEVER ENOUGH', playCount: 0 },
    { title: 'Pluto Projector ', artist: ['Rex Orange County'], album: 'Pony', playCount: 0 },
    { title: "IT'S YOU", artist: ['MAX', 'Keshi'], album: "IT'S YOU (feat. Keshi)", playCount: 0 },
];

let nowPlayingIndex = 0;
let nowPlaying = null;

export function show() {
    return(playlist);
}

export function addToPlaylist(song) {
    const _song = {
        title: song.title,
        artist: song.artist,
        alert: song.album,
        playCount: 0
    }
    playlist.push(_song);
    return({
        message: "Add a song to playlist",
        song: song
    })
}

export function now() {
    if (nowPlaying === null) {
        return({ message: "No music is playing" })
    } else {
        return({
            message: "Now playing",
            track: nowPlayingIndex+1,
            song: nowPlaying
        })
    }
}

function playFromStart() {
    nowPlayingIndex = 0;
    playlist[nowPlayingIndex].playCount++
    nowPlaying = playlist[nowPlayingIndex]
}

export function play() {
    if (nowPlaying === null) {
        playFromStart()
    }

    return({
        message: "Play",
        track: nowPlayingIndex+1,
        song: nowPlaying
    })
}

export function pause() {
    return({
        message: "Pause",
        track: nowPlayingIndex+1,
        song: nowPlaying
    })
}

export function stop() {
    nowPlaying = null;
    return({
        message: "Stop",
    })
}

export function next() {
    if (nowPlayingIndex < playlist.length-1) {
        nowPlayingIndex++
    } else {
        nowPlayingIndex = 0
    }
    
    playlist[nowPlayingIndex].playCount++
    nowPlaying = playlist[nowPlayingIndex]
    return({
        message: "Next",
        track: nowPlayingIndex+1,
        song: nowPlaying
    })
}