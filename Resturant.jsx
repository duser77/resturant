import React, { useState } from 'react';
import Style from "./Style.css";
import Menu from './MenuCard';
import EachCard from './EachCard';
import Navbar from './Navbar';

const uniqueList=[...new Set(Menu.map((curElem)=>{return curElem.category;})),"All"];
console.log(uniqueList);

const Resturant = () => {

    const [MenuData , setMenuData]=useState(Menu);
    const [menuList, setMenuList]=useState(uniqueList);

    const filterItem=(category)=>{
        if(category==="All"){setMenuData(Menu);return;}
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);
    }
  return (
    <>
    <div className="heading">Welcome to Mega Resturant</div>
    <Navbar filterItem={filterItem} menuList={menuList}/>
      <EachCard eachCard={MenuData}/>
    </>
  )
}

export default Resturant;
