import * as React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Menu from "./components/Menu/";
import Home from "./modules/Home";
import ProductDetails from "./modules/ProductDetails";

const App: React.FC = (): React.ReactElement => (
    <Router>
        <Menu></Menu>
        <div className="container">
            <Route path="/" component={Home} />
            <Route path="/product-details" component={ProductDetails} />
        </div>
    </Router>
);

export default App;
