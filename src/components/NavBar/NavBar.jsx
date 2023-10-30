import React, {useContext} from 'react';
import {CartWidget} from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'


export const NavBar=() => {



    return(
    
    <>

    <nav>

            <div>

                    <Link to={`/`}>
                            <div className="logoYNombre">         
                                
                                <h1>Mi tienda</h1>
                            </div>
                    </Link>

            </div>

            <div className="categorias">
                <ul>
                    <Link to={`/category/1`}>Celulares</Link>
                    <Link to={`/category/2`}>SmartTV</Link>
                    <Link to={`/category/3`}>Tablets</Link>
                    <Link to={`/category/4`}>Electrodomésticos</Link>
                    <Link to={`/category/5`}>Accesorios</Link>   
                </ul>
            </div>

            <div className="carrito">
                <Link to={"/cart"}>
                    <CartWidget/>
                </Link>
            </div>
    </nav>
        </>
    )
}
