import "./messa.css"
import {format} from "timeago.js"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Messa({message,own}){
    const [friends,setfriends]=useState([])
    
    useEffect(()=>{
        const getFriends = async ()=>{
             const res = await axios.get("/login")
             setfriends(res.data)  
        }
       getFriends(); 
   },[])

   const userone =friends.find(member=> member._id===message.sender)

    return(
        <div className={own ? "messa own" : "messa"}>
            <div className="messaTop">
                 <img
                    className="messaImg"
                    src={userone?.img_author}
                    alt="" 
                /> 
                <p className="messaText">{message?.text}</p>
            </div>

            <div className="messaBottom">
                {format(message?.createdAt)}
            </div>
        </div>
    )
}