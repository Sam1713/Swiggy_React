import { useEffect, useState } from "react"
import { HAI } from "./demo"

const UseRestaurantMenu=(resId)=>{
    const[res,setRes]=useState(null)
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async()=>{
        const dat=await fetch(`${HAI}${resId}`)
        const json=await dat.json()
        console.log('json',json)
        setRes(json.data)
        console.log('res',res)
    }
    return res
}
export default UseRestaurantMenu