import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner"


export default function Home(){
    const [product,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    async function fetchisOfProducts(){
        setLoading(true)
        const res=await fetch('https//fakestoreapi.com/products')
        const data=await res.json();
        if(data){
            setLoading(false)
            setProducts(data)
        }
    }

    useEffect(()=>{
        fetchisOfProducts()
    },[])
    return <div>{
        loading ? (<div className="nim-h-screen w-full flex justify-center items-center">
            <Circles 
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
            />
        </div>):
        <div className="nim-h-[80vh] girf sm:gird-cols-2 md:grid-cols-3 spae-x-5 space-y-10 lg:grid-cols-4 maz-w-6xl mx-auto p-3"></div>
        }</div>
}
