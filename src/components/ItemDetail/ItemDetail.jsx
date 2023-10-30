import React, {useState, useContext} from 'react';
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import {CartContext} from '../../context/CartContext'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'





export const ItemDetail = ({item}) => {
    const currentItem = item


    const {addItem, cartItems, isInCart} = useContext(CartContext);
    
    const formatMoney = (number) => {
        return "$ " + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    let [count, setCount] = useState(0);

        const handleClickIncrease = () =>{
            if (count < currentItem.stock){
            setCount(count + 1);
            }}
        

        const handleClickDecrease = () =>{
            if (count > 0){

            setCount(count - 1);
            }}

console.log('cart items', cartItems)
        



    return(

        <div>

                <Card style={{ width: '18rem' }} key={currentItem.id} className="itemDetail">

                    <Card.Img variant="top" src={currentItem.picture} className="imgCard"/>
                    
                    <Card.Body>
                        <Card.Title>{currentItem.title}</Card.Title>
                        <Card.Text>{currentItem.description}</Card.Text>
                        <Card.Text style={{fontWeight: 'bold', fontSize: '20px'}}>{formatMoney(currentItem.price)}</Card.Text>
                        
                        {!isInCart(currentItem.id)?(
                        <div>
                        
                        <ItemCount 
                        count= {count}
                        sub = {handleClickDecrease}
                        add = {handleClickIncrease}
                        /> 
                        <Button onClick={() => addItem(currentItem, count)}>Agregar al carrito</Button>

                        </div>
                        )
                        :
                        (
                            <div>
                            <Link to={'/cart'}>
                                <Button className="terminarCompra">Terminar compra</Button>
                            </Link>
                            <Link to={'/'}>
                                <Button variant="success">Seguir comprando</Button>
                            </Link>
                        </div>
                    )
                    }

                    </Card.Body>
                </Card>
                

        </div>
    )

} 

    
    