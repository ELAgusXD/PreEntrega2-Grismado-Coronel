import './ItemList.css'
import Container from 'react-bootstrap/Container'
import {Item} from '../Item/Item'
import {Loader} from '../Loader/Loader'



export const ItemList = ({productsList}) =>{


    
    return (
        <>

{
!!productsList.length? 


            <Container className="mt-5 itemList">

            { productsList.map((p) =>{
                return(

                            <Item key={p.id} product={p}/>

                )
            })
        }
            </Container>


    :

    <div className="loader">
        <Loader type={"balls"} color= {"#0D6EFD"} />
    </div>

    }
    </>
)}


