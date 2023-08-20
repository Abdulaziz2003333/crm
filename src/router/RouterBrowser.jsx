import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUsers from '../components/AddUsers'
import HomePage from '../components/HomePage';
import UserList from '../components/UserList';
import UserPay from '../components/UserPay';
import UserPayList from '../components/UserPayList';
import Edit from '../components/Edit';
import Header from '../components/Header';
function RouterBrowser() {
  return (
    <>
      <BrowserRouter>
      <Header/>
     <Routes>
  <Route path='/home' Component={HomePage} />
      <Route path='/adduser' Component={AddUsers}/>
      <Route path='/userlist' Component={UserList}/>
      <Route path='/userpay' Component={UserPay}/>
      <Route path='/userpaylist' Component={UserPayList}/>
    <Route path='/edit/:id'  Component={Edit}/>
   
     </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default RouterBrowser