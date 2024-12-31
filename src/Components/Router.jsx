import {Route, Switch, BrowserRouter} from "react-router-dom";


const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Product.jsx}/>
                <Route path="/cart" component={Cart.jsx}/>
            </Switch>
        </BrowserRouter>
    )
}