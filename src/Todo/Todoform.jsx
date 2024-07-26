import { useState } from "react";


export const Todoform = ({onAddTodo}) =>{
    const [inputValue, setInputValue] = useState({});
    const handleInputValue = (val) => {
        setInputValue({id:val,content:val,checked:false})
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
    onAddTodo(inputValue)
    setInputValue({id:"",content:"",checked:false})
    }
    return (
        <form onSubmit={handleFormSubmit}>
        <div>
            <input type="text"

                value={inputValue.content}
                onChange={(event) => handleInputValue(event.target.value)}
                className=" rounded-l-lg h-[30px] focus:outline-none p-2 bg-slate-100 shadow-md text-black"
                autoComplete="off"


            />
            <button type="submit" className="text-sm bg-zinc-500 hover:bg-zinc-600 rounded-r-lg w-[80px] h-[32px] shadow-md mt-2">Add Task</button>
        </div>
    </form>
    )
}