import { useDispatch } from 'react-redux';
import { Container } from "@material-ui/core";
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cpn_header from '~/components/cpn_header/cpn_header.js';
import Details from './pages/Details';
import Create_project from './pages/Create_project';
import Profile from './pages/Profile';
import Profile_user from './pages/Profile_user';
import Product from './pages/Product';
import Wallet from './pages/Wallet';
import Add_product from './pages/Add_product';
import Login from './pages/Login';
import Type_product from './pages/Type_product';
import Edit from './pages/Edit';
import Sign_up from './pages/Sign_up';
import Chat from './pages/Chat';
import axios from 'axios';

import * as actions from './redux/actions';
import AppContext from './components/AppContext';
import AppReducer from './reducers/AppReducer';
import { useReducer } from 'react';
import My_post from './pages/My_post';
import Add_project from './pages/Add_project';
import Mess from './pages/Mess'

function check_user_local() {
  let temp = JSON.parse(localStorage.getItem("user"));

  if (temp == null) {
    return null;
  }
  
  else {
    return {temp};
  }
}

function App_logged() {
  const initialState = {user : check_user_local(),posts : []}
  console.log(initialState);
  const [state_user, dispatch] = useReducer(AppReducer, initialState);
  
  return (
    <AppContext.Provider value={{state_user, dispatch}}>

    <Container maxWidth={false} className="" style={{margin:'0', padding: '0'}}>

      <Cpn_header />
        
      <Routes>
        <Route path="/" element={<Homepage />}>
          
        </Route>
        <Route path="/homepage" element={<Homepage />}>

        </Route>
        <Route path="/login" element={<Login />}>
          
        </Route>
        <Route path="/sign_up" element={<Sign_up />}>
          
        </Route>
        <Route path="/product" element={<Product />}>

        </Route>
        <Route path="/product/:id/edit" element={<Edit />}>

        </Route>
        <Route path="/add_product" element={<Add_product />}>
        
        </Route>
        <Route path="/my_post" element={<My_post />}>

        </Route>
        <Route path="/type_product/:slug" element={<Type_product />}>

        </Route>
        <Route path="/chat" element={<Chat/>}>
        
        </Route>
        <Route path="/wallet" element={<Wallet />}>

        </Route>
        <Route path="/details" element={<Details />}>

        </Route>
        <Route path="/profile" element={<Profile />}>

        </Route>
        <Route path="/profile_user/:slug" element={<Profile_user />}>

        </Route>
        <Route path="/create_project/:slug" element={<Create_project />}>

        </Route>
        <Route path="/add_project" element={<Add_project />}>

        </Route>

        <Route path="/Mess" element={<Mess />}>
          
        </Route>
      </Routes>
    </Container>

    </AppContext.Provider>
  )
}

function App() {

  return (
    
    <App_logged />
  )
}

export default App;
