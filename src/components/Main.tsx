import '../styles/Main.css'

export default function Main() {
    return (
        <main>
            <div className="container">
                <section className='input-row'>
                    <input type="text" className="top-text" />
                    <input type="text" className="top-text" />
                </section>
                <div className="image">
                    <img src="https://picsum.photos/800/600" alt="Meme aléatoire" />
                </div>
            </div>
        </main>
    )
}