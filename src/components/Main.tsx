import { useEffect, useState, type ChangeEvent } from "react";
import { type ApiResponse, type Meme } from "../types/ApiResponse";
import "../styles/Main.css";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState<Meme[]>([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        if (data.success === true) {
          setAllMemes(data.data.memes);
        }
      });
  }, []);

  function getRandomImage() {
    const randomNumber: number = Math.floor(Math.random() * allMemes.length);
    const newImageUrl: string = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: newImageUrl,
    }));
  }

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <section className="form">
        <label htmlFor="topText">
          Texte du haut:
          <input
            type="text"
            className="top-text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
            onChange={handleTextChange}
          />
        </label>

        <label htmlFor="topText">
          Texte du bas:
          <input
            type="text"
            className="bottom-text"
            placeholder="One does not simply"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleTextChange}
          />
        </label>

        <button onClick={getRandomImage}>Charger une nouvelle image</button>
      </section>

      <div className="meme">
        <img src={meme.imgUrl} alt="Image aléatoire" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
