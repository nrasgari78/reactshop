import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../component/controld/Controls"
const Prices={
    product1:56,
    product2:4,
    product3:5,
    product4:58,
    product5:55,
}
class Shoping extends React.Component{
 state={
     products:{
         product1:0,
         product2:0,
         product3:0,
         product4:0,
         product5:0,
     },
     totalprice:0
 }
    addProduct=(type)=>{
     const PrevCount=this.state.products[type]
     const UpdatedCount= PrevCount+1
     const ProductsUpdate={...this.state.products}
        ProductsUpdate[type]=UpdatedCount
     const PriceUpdate= Prices[type]+this.state.totalprice
        this.setState({totalprice:PriceUpdate,products:ProductsUpdate})
        console.log('clicked add')
}
removeProduct=(type)=>{
    const PrevCount=this.state.products[type]
    const UpdatedCount= PrevCount-1
    const ProductsUpdate={...this.state.products}
    ProductsUpdate[type]=UpdatedCount
    const PriceUpdate= Prices[type]-this.state.totalprice
    this.setState({totalprice:PriceUpdate,products:ProductsUpdate})
    console.log('clicked remove')
}
    render() {

        return (
            <Wrapper>
               <Controls productAdd={this.addProduct} productRemove={this.removeProduct} totalprice={this.state.totalprice} />
            </Wrapper>
        )
    }
}
export default Shoping
