import axios from "axios"
import { useQuery } from "react-query"

const getSuperHeroes=()=>{
    return axios.get("http://localhost:4000/superheroes")
}

const getFriends=()=>{
    return axios.get("http://localhost:4000/friends")
}

export const ParallelQueries=()=>{

    useQuery("fetchHeros", getSuperHeroes)
    useQuery("fetchFriends", getFriends)
    return<div>Parallel Queries</div>
}