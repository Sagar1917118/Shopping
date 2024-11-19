import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {add,remove,addItem,removeItem} from '../redux/slices/cartSlice'
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
export default function Card({data}){
    const [selected,setSelected]=useState(false); 
    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch(); 
    function checkPersent(data){
        var flag=false;
        for(let i=0;i<cart.length;i++){
            if(cart[i].item.id===data.id){
                flag=true;
                break;
            }
        }
        return flag;
    }
    function RemoveItemToCard(){
        dispatch(remove(data.id));
    }
    function AddItemToCart(data){ 
        console.log(data);
        dispatch(add(data));
    }
    const [classAdd,setClassAdd]=useState("scale-125");
    const [classRemove,setClassRemove]=useState("scale-125");
    function addSameItem(id){
        dispatch(addItem(id));
        setClassAdd("scale-90");
        setTimeout(()=>{
            setClassAdd("scale-125");
        },100);
    }
    function removeSameItem(id){
        dispatch(removeItem(id));
        setClassRemove("scale-90");
        setTimeout(()=>{
            setClassRemove("scale-125");
        },100);
    }
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
                    <button className='text-[9px] bg-green-500 p-1 rounded-md'>View Product</button>
                </div>
                <div className='flex flex-row-reverse justify-between item '>
                        <div className='flex gap-2'>
                            <AiOutlinePlusCircle className={`${classAdd}`} onClick={()=>{addSameItem(data.id)}}/>
                            <AiOutlineMinusCircle className={`${classRemove}`} onClick={()=>{removeSameItem(data.id)}}/>
                        </div>
                            {(checkPersent(data))?
                            <button className=" w-[100px] text-[10px] border-2 border-gray-700 py-[1px] px-1 rounded-full font-bold text-gray-600 hover:bg-gray-300" onClick={RemoveItemToCard}>Remove from Cart</button>
                            :
                            <button className=" w-[100px] border-2 border-gray-700 py-[1px] px-1 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-300" onClick={()=>{AddItemToCart(data)}}>Add to Cart</button>
                            }
                </div>
            </div>
        </div>
    )
}