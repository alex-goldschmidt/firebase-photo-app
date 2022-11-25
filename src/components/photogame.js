import "../styles/photogame.css";
import Dog from "../dog.jpeg";

const PhotoGame = () => {
  const handleDog = () => {
    const dog = document.querySelector('input[id="dog"]');
    return dog.checked ? alert("noice") : alert("not noice");
  };
  return (
    <div className="container">
      <div className="PictureContainer">
        <img className="Picture" src={Dog} alt="No image here" />
      </div>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDog();
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
