import axios from "axios"
import { useQueries } from "react-query"

const getSuperHeroes=(heroID)=>{
    return axios.get(`http://localhost:4000/superheroes/${heroID}`)
}

export const DynamicQueries=({heroIDs})=>{

   const queryResults= useQueries(
        heroIDs.map((id)=>{
            return {
                queryKey:["superhero", id],
                queryFn:()=>{getSuperHeroes(id)}
            }
        })
    )

    console.log({queryResults})
    return<div>hey</div>
}