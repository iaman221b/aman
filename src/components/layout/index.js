import React , { Component } from 'react';
import Header from './header'
import Footer from './footer'
let  Layout = (props) => {

  return (
    <div>
        <Header/>
            {props.children}
        <Footer/>
    </div>
  )

}
export default Layout