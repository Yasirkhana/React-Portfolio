import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ReactDom from 'react-router-dom';
import { BrowserRouter ,Switch ,Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer'

function App() {
  return (
    <> 
    <Navbar/>
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route path = "/about" component = {About} />
      <Route path = "/service" component = {Service} />
      <Route path = "/contact" component = {Contact} />
      <Redirect to= "/" />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
