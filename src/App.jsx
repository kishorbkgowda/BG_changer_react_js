import { useState } from "react"


function App() {
  const[color,setColor] = useState("red");

  return (
    <div className="w-full h-screen duration-200"
      style ={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl">
           
           
            <button onClick={()=>setColor("violet")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white" style={{backgroundColor:"Violet"}}>Violet</button>
            <button onClick={()=>setColor("Indigo")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white" style={{backgroundColor:"indigo"}}>Indigo</button>
            <button onClick={()=>setColor("Blue")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("Green")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("Yellow")} className="outline-none px-4 py-2 rounded-3xl shadow-lg " style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>setColor("Orange")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor("Red")} className="outline-none px-4 py-2 rounded-3xl shadow-lg text-white" style={{backgroundColor:"red"}}>Red</button>

          </div>
        </div>
    </div>
       
  )
}

export default App
 