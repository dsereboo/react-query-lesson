import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {QueryClientProvider, QueryClient } from "react-query"
import Homepage from './components/Home.page';
import RQ from './components/RQ.page';
import SuperHeroes from './components/SuperHeroes.page';


const queryClient=new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/RQ'>RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/super-heroes'>
          <SuperHeroes/>
        </Route>
        <Route path='/RQ'>
          <RQ/>
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </div>
  </Router>
  </QueryClientProvider>
  );
}

export default App;
