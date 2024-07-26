import {  useState } from "react"
import { Todoform } from "./Todoform";
import { List } from "./List";
import { DateTime } from "./DateTime";
const todokey = "reactTodo";
export const Todo = () => {
    
    const [task, setTask] = useState(()=>{
        const prevTodo = localStorage.getItem(todokey)
        if(!prevTodo) return [];
        return JSON.parse(prevTodo)
    });
   
   
    const handleDelete = (value) => {
      const updatedTask =  task.filter((curElem)=>curElem.content!==value);
      setTask(updatedTask)
    }


    const handleFormSubmit = (inputValue) => {
    const {id,content,checked} = inputValue;
        if (!content) return;
       const ifMatched = task.find(
        (curElem) =>curElem.content==content
       );
       if(ifMatched) return;
        setTask((prev) => [...prev, {id,content,checked}])
       
    }

    localStorage.setItem(todokey,JSON.stringify(task))
    

    const handleClear = () =>{
        setTask([])
    }


    const handleCheck = (content) =>{
    const updated = task.map((curElem)=>{
        if(curElem.content==content){
            return {...curElem,checked:!curElem.checked}
        }
        else{
            return curElem;
        }
    })
    setTask(updated)
    }
    return (

        <>

            <header className="flex flex-col items-center justify-center my-16">
                <h1 className="text-4xl font-semibold text-black">Todo List</h1>
                <br />
              <DateTime/>
                <br />
               <Todoform onAddTodo={handleFormSubmit}/>


                <section className="my-10 ">
                    <ul>
                        {
                            task.map((curElem) => {
                                return <List 
                                key={curElem.id} 
                                data={curElem.content}
                                checked={curElem.checked}
                                onHandleDelete={handleDelete}
                                onHandleChecked={handleCheck}/>
                                

                            })
                        }
                    </ul>
                </section>
                <section>
                    <button 
                    onClick={handleClear}
                    className="text-black bg-zinc-500 w-28 h-10 rounded-lg shadow-md hover:bg-zinc-600 ">clear all</button>
                </section>
            </header>

        </>
    )
}