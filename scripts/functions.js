function extractSongDetails(str = '', need){
    let start = str.split(' - ')
    need = need.toLowerCase()
    if (need === 'mainartist') return start[1].split(' ')[0]
    else if (need === 'song') return start[0]
    else if(need === 'filetype') return start[1].split('.')[1]
    else if (need === 'otherartists') return start[1].split('.')[0].split(' feat ')[1]
    else return `${need}: not understood, use one of these: \nmainArtist\nsong\nfileType\notherArtists`
}

// alert(extractSongDetails('Norah Remix - Delta_Fika feat Ohh_Two.mp3', 'mainartist'))
