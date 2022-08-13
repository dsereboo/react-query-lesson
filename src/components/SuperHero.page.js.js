import { useParams } from "react-router-dom"
import { useSuperHero } from "../hooks/useSuperHero"

export const SuperHero=()=>{
    const {id}=useParams()
    const{isLoading, isError, data, error}=useSuperHero(id)

    if(isLoading){
        return<h2>Loading ..</h2>
    }

    if(isError){
        return<h2>{error.message}</h2>
    }

    return  (
        <div>
            {data?.data.name}
        </div>
    )
}