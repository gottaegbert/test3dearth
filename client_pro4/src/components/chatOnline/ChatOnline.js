import axios from "axios"
import { useEffect, useState } from "react"
import "./chatOnline.css"




export default function ChatOnline({onlineUsers,currentId,setcurrentchat}){
    const [friends,setfriends]=useState([])
    const [onlinefriends,setOnlinefriends]=useState([])

    useEffect(()=>{
         const getFriends = async ()=>{
              const res = await axios.get("/login")
              setfriends(res.data)  
         }
        getFriends(); 
    },[])

    useEffect(()=>{
        setOnlinefriends(friends)
    },[friends])

    const handleClick = async (user)=>{
        try{
            const res=await axios.get(`/conversation/find/${currentId}/${user._id}`)
            setcurrentchat(res.data);
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <div className="chatOnline">
            {onlinefriends.map(o=>(
                <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                        <img className="chatOnlineImg" src={o?.img_author} alt=""/>
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName"> {o?.name_author} </span>
                </div>
            ))} 
         
        </div>
    )
}