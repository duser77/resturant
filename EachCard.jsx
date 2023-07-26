import React from 'react'

const EachCard = ({eachCard}) => {
    console.log(eachCard);
  return (
    <>
    <section className="container">
    
  
        {eachCard.map((curElem)=>{
            const { index, category,imgUrl, tittle, description,price} =curElem;
            return(
           
            <>
        
                <div className="menu-card m-5" key={curElem.index}>
                    <div className="menu-index">{index}</div>
                    <div className="menu-category ">{category}</div>
                    <h2 className="tittle m-5">{tittle}</h2>
                    <div className="menu-body">{description}</div>
                    <hr/>
                    <div className="menu-img"><img src={imgUrl} alt="" id='menu-img' width={350} height={200} /></div>

                </div>
           </>
        );
        })}
    
        </section>
    </>
  )
}

export default EachCard
