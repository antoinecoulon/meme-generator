import { useState } from 'react'
import '../styles/Main.css'

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    })
    
    return (
        <main>
            
                <section className='form'>
                    <input type="text" className="top-text" />
                    <input type="text" className="bottom-text" />
                    <button>Charger une nouvelle image</button>
                </section>
                <div className="meme">
                    <img src={meme.imgUrl} alt="Image aléatoire" />
                    <span className="top">{meme.topText}</span>
                    <span className="bottom">{meme.bottomText}</span>
                </div>
            
        </main>
    )
}