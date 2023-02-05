import { useState } from "react"

export default function Input(){
    const [name, setName] = useState()
    return (<div>
        <span>{name}</span>
        <input onChange={e => setName(e.target.value)} placeholder={"Enter your name"} value={name}/>
        </div>)
};
