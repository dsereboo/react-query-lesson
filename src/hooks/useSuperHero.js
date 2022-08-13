import axios from "axios"
import {useQuery} from "react-query"

const getSuperHero=(id)=>{
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useSuperHero=(id)=>{
    //To ensure distinct key exist for each separate superhero the key is modified to an array
    return useQuery(["getSuperhero",id], ()=>getSuperHero(id))
}

