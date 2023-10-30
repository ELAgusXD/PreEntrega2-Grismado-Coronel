import './Item.css'
import {ItemCount} from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Button from 'react-bootstrap/Button'


export const Item=({product})=>{

  let item = product


    const formatMoney = (number) => {
        return "$ " + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    
    const {addItem} = useContext(CartContext);
    


    let [count, setCount] = useState(0);

    const currentProduct = product 



    const handleClickIncrease = () =>{
        if (count < item.stock){
        setCount(count + 1);
        }}
    

    const handleClickDecrease = () =>{
        if (count > 0){

        setCount(count - 1);
        }}
        

    return(
        <>

            <Card style={{ width: '18rem' }} key={currentProduct.id}>
                <Link to={`/item/${currentProduct.id}`}>
                    <Card.Img variant="top" src={currentProduct.picture} className="imgCard"/>
                </Link>
                <Card.Body>
                    <Card.Title>{currentProduct.title}</Card.Title>
                    <Card.Text>
                    {formatMoney(currentProduct.price)}
                    </Card.Text>
                            <ItemCount 
                                count= {count}
                                sub = {handleClickDecrease}
                                add = {handleClickIncrease}
                                /> 
                            <Button onClick={() => addItem(item, count)}>Agregar al carrito</Button>
                </Card.Body>
            </Card>

        </>
    )}