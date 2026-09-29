import { useEffect, useState } from 'react'
import Card from '../components/Card'

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [])

    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', width:'95vw'}}>
            {products.map(product => <Card cardData={product}/>)}
        </div>
    )
}

export default Products
