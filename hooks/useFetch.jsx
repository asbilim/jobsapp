import { useState,useEffect } from "react";
import {axios} from "axios"


const useFetch = (endpoint) =>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [error_message,setError_message] = useState("")

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'a2af3d6858mshb41ff57b4d0a2aep12a0ffjsn1123bdcbfec4',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
      

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setData(response.data)
                setLoading(false)
            }catch(error){
                setError(true)
                setError_message(error.message)
            }
        }
        fetchData()
    },[])

    return{
        data,
        loading,
        error,
        error_message
    }
}