import { useEffect ,useState} from "react"

export const DateTime = () =>{

    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        setDateTime(`${date}-${time}`)
        }, 1000)
        return () => clearInterval(interval)
    }, [])


  return <>
   <h3 className="text-black text-lg font-semibold">{dateTime}</h3>
  </>
}