import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Order.css"
import Button from "../UI/Button/Button"
const Order=(props)=>{
    const summery=Object.keys(props.productsModal).map((item)=>{
        return(
            <li key={item}>
                {item}:{props.productsModal[item]}
            </li>
        )
    })
    return(
        <Wrapper>
        <h2>Orders</h2>
        <ul className="ul">
         {summery}
         </ul>
            <p>Total price={props.totalprice}</p>
            <p>Continue?</p>
            <Button btnType='succes' click={props.continue}>yes</Button>
            <Button btnType='danger' click={props.cancel}>No</Button>
        </Wrapper>
        )
}
export default Order
