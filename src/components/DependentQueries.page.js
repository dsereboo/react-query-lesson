import axios from "axios"
import { useQuery } from "react-query"
 

const fetchUserViaEmail=(email)=>{
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCourses=(id)=>{
    return axios.get(`http://localhost:4000/channels/${id}`)
}

export const DependentQueries=({email})=>{

   const{data:user, isLoading, isError, error}= useQuery(["user", email],()=>fetchUserViaEmail(email))
   const channelID=user?.data.channel

   console.log(channelID) 

   const{data:channels}=useQuery(["channel", channelID], ()=>fetchCourses(channelID),{
        enabled:!!channelID,
   })

   console.log(channels?.data)

   if(isLoading){
    return <h2>Loading</h2>
   }

   if(isError){
    return <h2>{error.message}</h2>
   }


    return <div>hey</div>
}

