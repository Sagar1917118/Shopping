import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import CategoryFilter from "./CategoryFilter";
import Card from './Card';
function Loader(){
    return(
        <div className="spinner mt-5"></div>
    )
}
export default function CompBody(){
    const apiData=useSelector((state)=>state.product);
    // const url="https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
            setTimeout(()=>{
                setLoading(false);
            },[500]);
            setLoading(true);
    },[apiData]);
    // async function callApi(){
    //     try{
    //     setLoading(true);
    //     const object=await fetch(url);
    //     const data=await object.json();
    //     console.log(data);
    //     setApiData(data);
    //     setLoading(false);
    //     }
    //     catch(e){
    //         alert("Data not found");
    //         setApiData([]);
    //     }
    // }
    // useEffect(()=>{
    //     callApi();
    // },[]);

    return(
        <div className="w-full flex flex-col justify-center items-center">
            <CategoryFilter></CategoryFilter>
             {!loading?
             (<div className="w-[90%] flex flex-wrap justify-center items-start gap-3 p-4">
                {apiData.map((element)=>{
                    return(
                    <Card key={element.id} data={element}/>
                    )
                    }) 
                }
            </div> )
            :<Loader/>}
        </div>
    )
}