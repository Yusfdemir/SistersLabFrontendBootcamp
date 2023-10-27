import {useEffect, useState} from 'react'
import './hamburger.css';
import UstEkmek from './UstEkmek';
import AltEkmek from './AltEkmek';
import malzemeler from './malzemeler';
import Ingredient from './Ingredient';

const Hamburger = () => {
    const [selectedIngredients,setSelectedIngredients]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)

    useEffect(()=>{
        let price=0;
        selectedIngredients.map((ingredient)=>{
            return price+=ingredient.count*ingredient.price
        })
        setTotalPrice(price)
    },[selectedIngredients])
    const addIngredient=(malzeme)=>{
        const isAdded=selectedIngredients.find(ingredient=> ingredient.id === malzeme.id);

        if(isAdded){
            setSelectedIngredients(
                selectedIngredients.map(ingredient=>{
                    if(ingredient.id===malzeme.id){
                        return {...ingredient,count:ingredient.count+1}
                    }
                    return ingredient
                })
            )
        }else{
            setSelectedIngredients(
                [
                    ...selectedIngredients,
                    {
                        ...malzeme,
                        count:1
                    }
                ]
            )
        }
    }

    const removeIngredient=(malzeme)=>{
        const addedIngredient=selectedIngredients.find(ingredient=> ingredient.id === malzeme.id);

        if(addedIngredient.count > 1){
            setSelectedIngredients(
                selectedIngredients.map(ingredient=>{
                    if(ingredient.id === malzeme.id){
                        return {
                            ...ingredient,
                            count:ingredient.count-1
                        }
                    }
                    return ingredient
                })
            )
        } else{
            setSelectedIngredients(selectedIngredients.filter(ingredient=>ingredient.id !== malzeme.id))
        }
    }
  return (
    <div className='containerHamburger'>
        <div className='malzemelerContainer'>
            <h3>Malzemeler</h3>
            <table>
                <thead>
                    <tr>
                        <th>Ürün Adı</th>
                        <th>Ürün Fiyatı</th>
                        <th>Ürün Ekle</th>
                        <th>Ürün Çıkar</th>
                    </tr>
                </thead>
                <tbody>
                {
                    malzemeler.map(malzeme=>(
                        <tr key={malzeme.id}>
                            <td>{malzeme.name}</td>
                            <td>{malzeme.price}</td>
                            <td><button className='add-btn' onClick={()=>addIngredient(malzeme)}>Add</button></td>
                            <td><button onClick={()=>removeIngredient(malzeme)}
                            className={ selectedIngredients.find((item) => item.id === malzeme.id) ? 'remove-btn': 'remove-btn disabled'}
                            >Çıkar</button></td>    
                        </tr>
                    ))
                }
                </tbody>
                
            </table>
            <h3>Eklenen Malzemeler</h3>
            <table>
                <tbody>
                    {
                        selectedIngredients.map(ingredient=>(
                            <tr key={ingredient.id}>
                                <td>{ingredient.name}</td>
                                <td>x{ingredient.count}</td>
                                <td>{ingredient.count*ingredient.price}</td>
                            </tr>
                        ))
                    }
                    {
                        totalPrice!==0 && (
                            <tr>
                                <td style={{fontWeight:'bolder'}}>Total Price:</td>
                                <td></td>
                                <td style={{fontWeight:'bolder'}}>{totalPrice}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
        <div className='hamburgerContainer'>
            <UstEkmek/>
            {
                selectedIngredients.map((ingredient,index)=>(
                    <Ingredient key={index} name={ingredient.name} count={ingredient.count}/>
                ))
            }
            <AltEkmek/>
        </div>
        
    </div>
  )
}

export default Hamburger