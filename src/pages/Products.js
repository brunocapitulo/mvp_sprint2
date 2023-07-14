import { useEffect, useState } from "react"
import Item from "../components/Item"
import products from '../products.json'
import banner from '../assets/banner.png'
import dentista from '../assets/dentista.jpg'
import oftamo from '../assets/oftamo.jpg'
import pediatra from '../assets/pediatra.jpg'
import exames from '../assets/exames.jpg'
import axios from 'axios'


export default function Products() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    setProductList(products.consultas)
  }, [])
 
  return (
    <div className="content-product">
      <header>
        <div className="user">
          <span>Entre</span>
        </div>
      </header>

      <section className="banner">
        <img src={banner} alt="front\src\assets\banner.png" />
        <p>Em destaque:</p>
      </section>

      <section className="main-products">
        <img src={dentista} alt="Dentista"/>
        <img src={pediatra} alt="Pediatra"/>
        <img src={exames} alt="Exames"/>
        <img src={oftamo} alt="Oftamologista"/>
        {productList.map((p, index) => (
          <Item key={index} product={p} />
        ))}
    

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
