import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"


const SuperHeroes=()=>{

    const[isLoading, setIsLoading]=useState(true);
    const[data, setData]=useState([]);
    const[error, setError]=useState("")
    
    useEffect(()=>{
        axios.get("http://localhost:4000/superheros").then(
            res=>{
                setData(res.data)
                setIsLoading(false)
            }
        ).catch((error)=>{
            setError(error.message)
            setIsLoading(false);
        }
        )
    },[])

    if (isLoading){
        return <h2>Data is Loading...</h2>
    }

    if(error){
        return <h1>{error}</h1>
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