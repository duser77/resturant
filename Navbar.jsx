import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
    <div className="navbar ">
    {
        menuList.map((curElem)=>{
            return (
                
      <button className="btngrp" onClick={()=>filterItem(curElem)}>{curElem}</button>
     
            );
        })
    }
    </div>
    </>
  )
}

export default Navbar
