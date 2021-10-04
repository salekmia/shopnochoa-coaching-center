import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../src/pages/about/About';
import Services from '../src/pages/services/Services';
import './App.css';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Student from './pages/students/Students';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/students">
            <Student></Student>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
