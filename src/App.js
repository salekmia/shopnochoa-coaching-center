import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../src/pages/about/About';
import Services from '../src/pages/services/Services';
import './App.css';
import Home from './pages/home/Home';
import Student from './pages/students/Students';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/students">
            <Student></Student>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
