import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"


const SuperHeroes=()=>{

    const[isLoading, setIsLoading]=useState(true);
    const[data, setData]=useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:4000/superheroes").then(
            res=>{
                setData(res.data)
                setIsLoading(false)
            }
        )
    },[])

    if (isLoading){
        return <h2>Data is Loading...</h2>
    }

    return(
        <>
            <h2>Super Heroes Page</h2>
            {
                data.map(hero=>{
                    return<div key={hero.id}>{hero.name}</div>
                })
            }
        </>

    )
}
 
export default SuperHeroes