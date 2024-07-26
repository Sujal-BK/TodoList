import { AiTwotoneDelete } from "react-icons/ai"
import { FaCircleCheck } from "react-icons/fa6";

export const List = ({data,onHandleDelete,onHandleChecked,checked}) =>{
    return <>
    <li  
    
    className="flex justify-between gap-10 bg-slate-400 m-1 p-2 rounded-lg w-[278px] h-10">
                                    <span 
                                    
                                    className={checked?"line-through":"no-underline" }>{data}</span>
                                    <div className="flex  gap-5">

                                        <button className="text-xl"
                                         onClick={()=>onHandleChecked(data)}
                                        > <FaCircleCheck /></button>
                                        <button className="text-xl"
                                            onClick={() => onHandleDelete(data)}
                                        ><AiTwotoneDelete /></button>
                                    </div>
                                </li>
    </>
}