import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import banner from '../assets/banner.png'
import axios from 'axios'


export default function ProductDetails() {
    let {state} = useLocation();
    console.log(state)
    const goToPage = useNavigate()

    return (

        <div className="detailed-content">
            <section className="banner">
                <img src={banner} alt="front\src\assets\banner.png" />
            </section>

            <div>
                <button className="back" onClick={() => goToPage('/products')}>Clique para voltar</button>
                <div>
                    <img className="detailed-image" src={state.p.image} alt="" />
                </div>
                <div>
                    <h2>{state.p.title}</h2>
                    <p>{state.p.description}</p>
                </div>
            </div>
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
