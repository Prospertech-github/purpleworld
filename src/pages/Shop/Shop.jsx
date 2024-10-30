import Navbar from '../../components/Navbar'
import DarkBG from '../../components/DarkBG'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import styles from './Shop.module.css' 
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [groceries, setGroceries] = useState(false)
  const [skinCare, setSkinCare] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/products?limit=20').then(response => {setProducts(response.data.data.products)})
    // fetch('')
  },[])

  useEffect(()=>{
    axios.get()
  })
  return (
    <>
        <Navbar />
        <DarkBG text="Shop">
          <div>
            <p onClick={()=>setGroceries(!groceries)}>Groceries</p> 
            <p> &#62; </p>
            <p onClick={()=>setSkinCare(!skinCare)}>Skin Care</p>
          </div> 
        </DarkBG>
          <section className={styles.productArea}>
            {products.map((product)=>{
              return(
                <ProductCard productName={product.title} category={product.category.title} price={`$${product.price}`} imgUrl={product.icon} key={products.id}/>
              )
            })}

            {/* {
              groceries && 
            } */}

          </section>
        <Footer />
    </>
  )
}
