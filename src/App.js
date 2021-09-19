import './App.css';
import MenuAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PostpaidOptions from './Pages/PostpaidOptions'
import PlanSummary399 from './Pages/PlanSummary399';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <MenuAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/PostpaidOptions'}  > <PostpaidOptions/> </Route>
            <Route path={process.env.PUBLIC_URL + '/PlanSummary399'}  > <PlanSummary399/> </Route>
          </Switch>

      
    </div>
  );
  }

export default App;
