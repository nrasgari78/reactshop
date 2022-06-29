import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Layout.css"
const Layout=(props)=>{
    return (
<Wrapper>
             <h3>nanigation</h3>
             <main className="content">{props.children}</main>


</Wrapper>
        )
}
export default Layout
