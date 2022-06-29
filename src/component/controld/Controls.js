import React from "react";
import Builders from "./builders/Builders";


const products=[
    {id:1, title:"products1",type:"product1"},
    {id:2,title:"products2",type:"product2"},
    {id:3,title:"products3",type:"product3"},
    {id:4,title:"products4",type:"product4"},
]

const Controls=(props)=>{
    return(
        <div>
            <p>Totalprice:{props.totalprice}</p>
             {products.map((item)=>{
             return <Builders  title={item.title}
                               key={item.id}
                               add={()=>props.productAdd(item.type)}
                               remove={()=> props.productRemove(item.type)}

             />
                })}
            <button>Order</button>
        </div>
    )
}
export default Controls
