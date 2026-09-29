import React from 'react'

function Card({cardData}) {
    // {id: 1, title:'biryani', price:200, image:""}
    const {title, price, description, category} = cardData
    return (
        <div className='card' style={{border:'1px solid black', padding:'1rem', margin:'1rem', width:'20rem', borderRadius:'0.5rem', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition:'0.3s'}}>
            {
                <ul style={{listStyleType:'none', padding:0, margin:0}}>
                    <li><img src={cardData.image} alt={title} style={{width:'100%'}}/></li>
                    <li><b>{title}</b></li>
                    <li>{price}</li>
                    <li>{description}</li>
                    <li>{category}</li>
                </ul>
            }
        </div>
    )
}

export default Card
