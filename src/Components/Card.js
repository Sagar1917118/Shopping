import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Card({data}){
    const [selected,setSelected]=useState(false); 
   const navigate=useNavigate();
    return(
        <div className="w-[260px] h-[390px] flex flex-col items-center rounded-md shadow-lg border-2 border-gray p-5 gap-2 hover:scale-105 transition-all duration-300">
              <p className="font-bold">{`${data.name}`}</p>
             <div className="w-[200px] h-[200px]">
                <img src={data.image} className="object-contain h-full w-full"></img>
            </div>
            <p className="text-sm text-gray-400">{`${data.description.substring(0,50)}...`}</p>
            <div className="w-full flex flex-col  gap-2 justify-between mt-4">
                <div className='flex justify-between'>
                    <span className="text-green-500 font-bold">{`$${data.price}`}</span>
                    <button className='text-[12px] font-bold bg-green-500 p-1 rounded-md' onClick={()=>{navigate(`/view-product/${data.id}`)}}>View Product</button>
                </div>
               
            </div>
        </div>
    )
}