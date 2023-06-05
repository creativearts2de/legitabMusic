import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage, uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCnXoqep7H8_NBWywgSZBV-9uTGquMXxLQ",
  authDomain: "legitab-audio.firebaseapp.com",
  projectId: "legitab-audio",
  storageBucket: "legitab-audio.appspot.com",
  messagingSenderId: "666084265823",
  appId: "1:666084265823:web:6b9063797707322d63b0ea",
  measurementId: "G-2YC2HT27K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

// Access storage
const storage = getStorage()

const theForm = document.querySelector('form.upload_form')
const theFile = theForm.querySelector('#file')
const displayFileDetails = theForm.querySelector('.preview')

theForm.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(typeof theFile.files[0])
    const metaData = {
        songName: extractSongDetails(theFile.files[0].name, 'song'),
        mainArtist: extractSongDetails(theFile.files[0].name, 'mainartist'),
        otherArtists: extractSongDetails(theFile.files[0].name, 'otherartists'),
        fileType: theFile
    }
    const storageRef = ref(storage, theFile.files[0].name)
    const uploadTask = uploadBytesResumable(storageRef, file, metaData)

    uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, (error) => {
        console.log(error.code)
    })
})

theFile.addEventListener('change', ()=>{
    displayFileDetails.textContent = theFile.files[0].name
})


