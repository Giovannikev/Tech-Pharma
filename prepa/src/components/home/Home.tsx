import './home.css'

const Home = () => {
    return(
        <section className='home section' id='home'>
            <div className="home__container container grid">
                <div className="content">
                    <h1 className="title">Bienvenue sur votre pharmacie en ligne </h1>
                    <div className="home-image">
                        <img src="https://cdn.pixabay.com/photo/2023/09/20/07/37/doctor-8264060_640.jpg" alt="Pharmacie en ligne - Tech Pharma"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home