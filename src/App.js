import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../src/pages/about/About';
import './App.css';
import Home from './pages/home/Home';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
