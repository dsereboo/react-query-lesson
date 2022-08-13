import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"


const getColor=(pageNum)=>{
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNum}`)
}


export const PaginatedQueries=()=>{

    const[pageNum,setPageNum]=useState(1);

    const{data:colors, error, isLoading, isError, refetch}=useQuery(["getColors", pageNum], ()=>getColor(pageNum), {
        keepPreviousData:true,
    })

    if(isLoading){
        return<h2>Loading</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


    return(
        <>
            <h2>List of colors</h2>
            <div >
                {
                    colors?.data?.map(
                        (item)=>{
                            return<p key={item.id}>{item.label}</p>
                        }
                    )
                }
            </div>
                <div>
              

            <button onClick={()=>{setPageNum(prevPage=>prevPage-1)}} disabled={pageNum===1}>
                Previous
            </button>

            <button onClick={()=>{setPageNum(prevPage=>prevPage+1)}} disabled={pageNum===4}>
                Next
            </button>
                </div>
           
        </>
    )
}

