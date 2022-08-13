import axios from "axios"
import {useQuery, useQueryClient} from "react-query"

const getSuperHero=(id)=>{
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useSuperHero=(id)=>{
    const queryClient=useQueryClient()
    //To ensure distinct key exist for each separate superhero the key is modified to an array
    return useQuery(["getSuperhero",id], ()=>getSuperHero(id),{
        initialData:()=>{
            const hero=queryClient.getQueryData("superheroes")?.data?.find(hero=>hero.id===parseInt(id))

        if(hero){
            return {
                data:hero
            }
        }else{
            return undefined
        }
        }
    })
}

