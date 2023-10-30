import './ItemDetailContainer.css'
import {Productos} from '../../data/data' //Utilizado en caso de no emplear FireBase.
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'


export const ItemDetailContainer = () => {


    const [itemDetailCont, setItemDetailCont ] = useState([])

    const {id} = useParams ();
    
     useEffect(()=>{
         const promise = getItems()
     promise.then(json => {setItemDetailCont(json)})
     }, [itemDetailCont, id])

     const getItems = () =>{
     const promise = new Promise((resolve,reject) =>{
             const filteredById = Productos.filter(prod=>prod.id==id)
             setTimeout(()=>{ // original: resolve(Productos)
                 resolve(filteredById)

             }, 2000)
         })

         return promise
     }
    
    
    return ( 
        <div>

        {
        !!itemDetailCont.length? 

        
            <Container className="mt-5 itemDetailContainer">

                {itemDetailCont.map((product)=>{

                        return(
                        
                            <ItemDetail item={product}/>  

                                )
                        })
                    
                }
                
                
            </Container>
            :

            <div className="loader">
                <Loader type={"balls"} color= {"#0D6EFD"} />
            </div>
            }
        </div>
        )
    }