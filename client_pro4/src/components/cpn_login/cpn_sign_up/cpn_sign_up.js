import React , { useContext , useState } from "react";
import "./cpn_sign_up.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Cpn_sign_up() {
    const [userInput, setUserInput] = useState({email : "", password : "" ,name_author : '', img_author : ''});

    const navigate = useNavigate();

    const onChangeHandle = (e) => {
        setUserInput({...userInput, [e.target.name] : e.target.value});
    }

    const onSubmitHandle = async (e) => {
        try {
          e.preventDefault();
            
            navigate('../login');
       
        } catch (error) {
        //   setErrorMessage(error.response.data.message);
        }
    }

    // console.log(0000);
    return (
        <div style={{marginTop : '1%'}}>

            <div class="main-container_sign_up">
                <div class="sign_up">
                    <div class="sign_up__form-container">
                    
                        <form method="POST" class="sign_up__form" action="http://localhost:5000/signup">
                            <p class="sign_up__title" style={{marginLeft: '3rem'}}>
                                Sign Up 
                            </p>
                            <p class="sign_up__decs"  style={{marginLeft: '3rem'}}>
                                Professional Crowdfunding Platform - Let's explore ! 
                            </p>
                            <label for="name">Name*</label>
                            <input onChange={onChangeHandle} type="text" name="name" id="name" placeholder="display name"/>
                            <label for="img_author">Image_author</label>
                            <input onChange={onChangeHandle} type="text" name="img_author" id="img_author" placeholder="img address"/>
                            <label for="email">Email*</label>
                            <input onChange={onChangeHandle} type="email" name="email" id="email" placeholder="user@mail.com"/>
                            <label for="password">Password*</label>
                            <input onChange={onChangeHandle} type="password" name="password" id="password" placeholder="strong password"/>
                            <p class="conditions" style={{display : 'flex', justifyContent : 'center'}}>
                                <input type="checkbox" style={{width: '20px',marginRight : '30px'}}/>
                                I agree to the 
                                <a href="#">Terms and Conditions</a>
                            </p>
                            <button type="submit" style={{marginBottom : '30px'}}>Sign Up</button>
                    
                        </form>
                    </div>
                    <img
                        class="login__banner"
                        src={require('../../../public/img/imglogin/crownfuding.png')}
                    />
                </div>
            </div>
            
        </div>
    )
}