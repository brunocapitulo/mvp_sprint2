import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.png'

export default function Home(){

    const goToPage = useNavigate()

    return (
        <div className="content-product">
            {/* Cabeçalho */}
            <header>
                <div className="user">
                    <span>Entre</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
                <div className = "text-intro">
                    <p>Marque agora mesmo ou baixe o nosso app</p>
                    <button className="more-info" onClick={() => goToPage('/products')} style={{ fontSize: '25px', padding: '10px 20px' }}>Entre e confira!</button>
                </div>
            </section>

            <section className="main-products">
                <p>Atendimentos em destaque:</p>
                <ul>
                    <li>Exames de laboratório</li>
                    <li>Dentista</li>
                    <li>Pediatra</li>
                    <li>Oftamologista</li>
                </ul>
            </section>

            <footer>
                <div className = "text-intro">
                    <p>Confira também:</p>
                    <p>Outros serviços</p>
                    <p>Entre em contato</p>
                </div>
            </footer>
        </div>
    )
}
