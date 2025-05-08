import '../styles/Header.css'
import icon from "../assets/emoji.png"

export default function Header() {
    return (
        <header>
            <img src={icon} alt='Icone Fou rire' />
            <h1>Meme Generator</h1>
        </header>
    )
}