import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {QueryClientProvider, QueryClient } from "react-query"
import Homepage from './components/Home.page';
import RQ from './components/RQ.page';
import SuperHeroes from './components/SuperHeroes.page';
import {ReactQueryDevtools} from "react-query/devtools"
import { SuperHero } from './components/SuperHero.page.js';
import { ParallelQueries } from './components/ParallelQueries.page';
import { DynamicQueries } from './components/DynamicQueries.page';
import { DependentQueries } from './components/DependentQueries.page';
import { PaginatedQueries } from './components/PaginatedQueries.page';

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
        <Route path="/superhero/:id">
          <SuperHero/>
        </Route>
        <Route path="/parallel">
          <ParallelQueries/>
        </Route>
        <Route path="/paginated">
          <PaginatedQueries/>
        </Route>
        <Route path="/dependent">
          <DependentQueries email="aaa111@exam.com"/>
        </Route>
        <Route path="/dynamic">
          <DynamicQueries heroIDs={[1,3]}/>
        </Route>
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
  <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
  </QueryClientProvider>
  );
}

export default App;
