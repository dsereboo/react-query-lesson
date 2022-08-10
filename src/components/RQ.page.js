import {useQuery} from "react-query"
import axios from "axios"


const getSuperHeroes=()=>{
    return axios.get("http://localhost:4000/superheroes")
 }

 
const RQ=()=>{
 
    //Requires a unique key and a function that returns a promise
    const {isLoading, data } = useQuery("super-heroes",getSuperHeroes)

    if(isLoading){
        return<h2>Loading ....</h2>
    }

    // console.log(data.data)

    return(
        <>
        <h2>React Query</h2>
        {
            data?.data.map((hero)=>{
                return <div key={hero.id}>
                   <p>{hero.name}</p> 
                </div>
            })
        }
        </>
    )
}

export default RQ