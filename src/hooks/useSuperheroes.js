import axios from "axios"
import { useQuery } from "react-query"

const getSuperHeroes=()=>{
    return axios.get("http://localhost:4000/superheroes")
 }


const useSuperHeroes=(onSuccess, onError)=>{
    return useQuery("super-heroes",getSuperHeroes, {
        
        //Controls 
        // staleTime:30000,

        //Control to perform backgroun fetching of data when component gets mounted
        refetchOnMount:true,

        ///Specifies time after which to make an automatic request to fetch data
        // refetchInterval:stop?2000:false,

        //Ensure background refresh happens even if browser is out of focus
        refetchIntervalInBackground:true,

        //Determines whether query should be fired when component is mounted automatically
        // enabled:false,

        //Key to assign callback to succesful data fetch
        // onSuccess:success,

        //Key to assign callback to failure in data fetch
        // onError:failure,

        //Gives access to data fetched for transformation
        // select:(data)=>{
        //     const heroNames=data.data.map(
        //         (hero)=>
        //               hero.name    
        //     )
        //     return heroNames
        // }
    })

}

export default useSuperHeroes