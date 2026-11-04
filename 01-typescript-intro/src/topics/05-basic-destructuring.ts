
interface AudioPLayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details; 
}

interface Details { 
    author: string;
    year: number;
}

const AudioPLayer: AudioPLayer = {
    audioVolume: 90,
    songDuration: 8.34,
    song: 'You rock my world',
    details: {
        author: 'Michael Jackson',
        year: 2020
    }
}
// destructuring
const song = 'new song';

const {
    song:anotherSong,
    songDuration:duration, 
    details
} = AudioPLayer;
const{author} = details;

/* 
console.log('song:', anotherSong);
console.log('songDuration:', duration);
console.log('author:', author); */

const [, , trunks= 'undefined'] : string[] = ['Goku', 'Vegeta'];

console.log('personaje 3:', trunks);
