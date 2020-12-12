import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Agents from './components/Agents';
import Weapons from './components/Weapons';
import Maps from './components/Maps';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (

    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}>
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/agents" component={Agents}>
            <Navbar />
            <Agents />
            <Footer />
          </Route>
          <Route path="/weapons" component={Weapons}>
            <Navbar />
            <Weapons />
            <Footer />
          </Route>
          <Route path="/maps" component={Maps}>
            <Navbar />
            <Maps />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
