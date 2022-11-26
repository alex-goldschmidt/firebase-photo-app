import "../styles/photogame.css";
import Dog from "../dog.jpeg";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const PhotoGame = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCKT4SIykdMH_5cQuprMoUfDTdHb8QfaT4",
    authDomain: "photo-app-2e10a.firebaseapp.com",
    projectId: "photo-app-2e10a",
    storageBucket: "photo-app-2e10a.appspot.com",
    messagingSenderId: "770763465304",
    appId: "1:770763465304:web:2e3b06fe8791982fe5602d",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const choicesRef = collection(db, "Choices");
  async function getChoices() {
    const dogButton = document.querySelector("input[value=dog]");

    await setDoc(doc(choicesRef, "dog"), {
      name: "dog",
    });

    const docRef = doc(db, "Choices", "dog");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && dogButton.checked) {
      console.log("Document data:", docSnap.data());
      alert("Correct!");
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      alert("Wrong!");
    }
  }
  return (
    <div className="container">
      <div className="PictureContainer">
        <img className="Picture" src={Dog} alt="No image here" />
      </div>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getChoices();
          }}
        >
          <p className="question">What animal is in this picture?</p>
          <input type="radio" id="dog" name="drone" value="dog" />
          <label htmlFor="dog">Dog</label>
          <div>
            <input type="radio" id="cat" name="drone" value="cat" />
            <label htmlFor="cat">Cat</label>
          </div>
          <div>
            <input type="radio" id="lion" name="drone" value="lion" />
            <label htmlFor="lion">Lion</label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default PhotoGame;
