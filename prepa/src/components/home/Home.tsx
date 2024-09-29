import './home.css'

const Home = () => {
    return(
        <section className='home' id='home'>
            <div className="home__container">
                <div className="content">

                    <div className="content-left">
                        <h1>Bienvenue sur votre site Pharmacie en ligne</h1>
                        <div className="button__container">
                            <button type="button" className='button__create button'>Créer un Compte</button>
                            <button  type="button" className='button__talk button'><a href="#chat">Parlez à l'assistant</a></button>
                        </div> 
                    </div>

                    <div className="home-image">
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/11/57/apothecary-159037_640.png" alt="Pharmacie en ligne - Tech Pharma"/>
                    </div>

                </div>
            </div>

            
        </section>
    )
}

export default Home