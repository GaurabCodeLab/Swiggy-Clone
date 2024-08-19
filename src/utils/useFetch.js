import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const [resData, setResData] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("Something Went Wrong");
                }
                const result = await response.json();
                setResData(result);
            } catch (error) {
                console.log("Error in fetching data", error);
            }
        }
        // console.log("child useeffect called")
        fetchData();
    }, []);
    // console.log("child called");
    return resData;
};

export default useFetch;