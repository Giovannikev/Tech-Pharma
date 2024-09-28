import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container">
                
                <div className="row">
                    <div className="col-1">
                        <h4 className="title">
                            Tech Pharma
                        </h4>

                        <ul className="informations">
                            <li>
                                <a href="/fr/qui-sommes-nous" title="Qui sommes-nous ?">Qui sommes-nous ?</a>
                            </li>
                            <li>
                                <a href="/fr/histoire-premiere-pharmacie-en-ligne" title="Notre histoire">Notre histoire</a>
                            </li>
                            <li>
                                <a href="/fr/nos-services-en-pharmacie" title="Nos services">Nos services</a>
                            </li>
                            <li>
                                <a href="/fr/parapharmacie" title="Parapharmacie">Parapharmacie</a>
                            </li>   
                            <li>
                                <a className="recruitment" href="/fr/recrutement" title="Rejoignez-nous !">Rejoignez-nous !</a>
                            </li>
                        </ul>
                        
                    </div>
                    
                    <div className="col-1">
                        <h4>
                            Informations
                        </h4>
                        <ul className="informations">
                            <li className="item">
                                <a href="/fr/aide/livraison" title="Livraison">Livraison</a>
                            </li>
                            <li className="item">
                                <a href="/fr/faq" title="FAQ">FAQ</a>
                            </li>
                            <li className="item">
                                <a href="/fr/aide/retour-remboursement" title="Réclamation &amp; Rétractation">Réclamation &amp; Rétractation</a>
                            </li>
                                    <li className="item">
                                <a href="/fr/contact/" title="Contact">Contact</a>
                            </li>
                            <li className="item">
                                <a href="/fr/rappels-lots" title="Rappels de lots">Rappels de lots</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-1">
                        <h4>Informations légales</h4>
                        <ul className="informations">
                            <li>
                                <a href="/fr/page/mentions-legales.html" title="Mentions légales">Mentions légales</a>
                            </li>
                            <li>
                                <a href="/fr/page/protection-donnees-personnelles.html" title="Protection des données personnelles">Protection des données personnelles</a>
                            </li>
                            <li>
                                <a href="/fr/conditions-generales-de-vente" title="Conditions Générales de Vente">Conditions Générales de Vente</a>
                            </li>
                            <li>
                                <a href="/fr/conditions-des-offres" title="Conditions des offres">Conditions des offres</a>
                            </li>
                                    <li>
                                <a href="javascript:window.cookieBar.display()">
                                    Gérer mes cookies
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-1 social">
                        <h4>Contact</h4>
                        <a href="" className="home__social-icon" target='_blank'>
                            <i className='bx bxs-phone'></i>
                        </a>

                        <a href="" className="home__social-icon" target='_blank'>
                            <i className='bx bxl-messenger' ></i>
                        </a>

                        <a href="" className="home__social-icon" target='_blank'>
                            <i className="bx bxl-instagram-alt"></i>
                        </a>
                    </div>
                </div>

                <span className="footer__copy">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 to-green-300 to-green-200">&copy;2023 Tech Pharma. All rights reserved.</span> 
                </span>

            </div>
        </footer>
    )
}
export default Footer