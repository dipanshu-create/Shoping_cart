import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export default function Cart(){
    const [totalCart,setTotalCart]=useState(0)

    const {cart}=useSelector(state=>state)
    
    useEffect(()=>{
        setTotalCart(cart.reduce((ace,curr)=>acc+curr.price))
    },[cart])

    console.log(state)
    return <div>Cart</div>
}

