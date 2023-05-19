import { useEffect, useRef, useState } from "react";
import "./conversation.css";
import axios from "axios"

export default function Conversation({conversation,currentUser}){

    const [user,setUser]=useState({})

    useEffect(()=>{
        const friendId=conversation.members.find(m=>m !== currentUser._id)

        const getUser = async () =>{
            try{
                const res = await axios("/login")
                const resuser=res.data.find(m=>m._id==friendId)
                setUser(resuser);
            }catch(err){
                console.log(err)
            }    
        } 
        getUser()
    },[currentUser,conversation])

    return(
        <div className="conversation"> 
            { <img className="conversationImg" src={user?.img_author} alt="" /> }
            { <span clasName="conversationName">{user?.name_author}</span> }
        </div>
    )
}