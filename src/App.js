import React from "react";
import Layout from "./component/Layout/Layout";
import Shoping from "./container/shoping/Shoping";
class App extends React.Component{
    render() {
        return (
            <div>
            <Layout>
               <Shoping/>
            </Layout>
            </div>
        )
    }
}
export default App
