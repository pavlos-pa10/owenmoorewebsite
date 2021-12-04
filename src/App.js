import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Teaching from './components/Teaching';
import Riding from './components/Riding';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import MenuAppBar  from './components/MenuAppBar';
import {

  Switch,
  Route,
 
} from "react-router-dom";
const App = () => {

  return (
    <Container>
      <Header/>
      <MenuAppBar/>
      
      <Switch>

      <Route exact from="/" render={props => <HomePage {...props} />} />
      <Route exact from="/teaching" render={props => <Teaching {...props} />} />
      <Route exact from="/riding" render={props => <Riding {...props} />} />
      <Route exact from="/gallery" render={props => <Gallery {...props} />} />
      <Route exact from="/testimonials" render={props => <Testimonials {...props} />} />
      <Route exact from="/contact" render={props => <Contact {...props} />} />
      </Switch>
      

   
    </Container>
  )
}

export default App;
