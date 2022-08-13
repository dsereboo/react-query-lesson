import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import useSuperHeroes from "../hooks/useSuperheroes"


const getSuperHeroes=()=>{
    return axios.get("http://localhost:4000/superheroes")
 }

 //Poll data every 3 seconds
 //Add a new superhero
 //Callback to check if length is 4
 //Stop the querying if data is 4

const RQ=()=>{

    const[stop, setStop]=useState(true)
    //Function to be fired when query is succesful
    const success=(data)=>{
        console.log("Data has be fetched!!", data)
        // if(data.data.length===4){
        //     console.log("Max size reached")
        //     setStop(false)
        // }
    }

    //Function to be fired when query has error fetching data
    const failure=()=>{
        console.log("This isn't working")
    }
 
    //Requires a unique key and a function that returns a promise
    const {isLoading, data, isError, error, isFetching, refetch } = useSuperHeroes(success,failure)

    if(isLoading||isFetching){
        return<h2>Loading ....</h2>
    }

    if(isError){
        return<h2>{error.message}</h2>
    }

    // console.log("fetch",isFetching);
    // console.log(isLoading)

    return(
        <>
        <h2>React Query</h2>
        {
            data?.data.map((hero)=>{
                return <div key={hero.id}>
                   <Link to={`superhero/${hero.id}`}>{hero.name}</Link> 
                </div>
            })
        }
        {/* {
            data.map((heroName)=>{return(<div key={heroName}>{heroName}</div>)})
        } */}

        <button onClick={refetch}>
            fetch Heroes
        </button>
        </>
    )
}

export default RQ