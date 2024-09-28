import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">

                <div className="footer__social">
                <a href="https://www.linkedin.com/in/giovanni-kevin-204422300/" className="home__social-icon" target='_blank'>
                    <i className='bx bxs-phone'></i>
                </a>

                <a href="https://www.instagram.com/giovanni_kevin_" className="home__social-icon" target='_blank'>
                    <i className='bx bxl-messenger' ></i>
                </a>

                <a href="https://github.com/Giovannikev/" className="home__social-icon" target='_blank'>
                    <i className="bx bxl-instagram-alt"></i>
                </a>
                </div>

                <span className="footer__copy">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 to-green-300 to-green-200">&copy;2023 Tech Pharma. All rights reserved.</span> 
                </span>

            </div>
        </footer>
    )
}
export default Footer