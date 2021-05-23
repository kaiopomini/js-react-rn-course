import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/products/:id" component={Product} />
      </Switch>
    </Router>
  )
}

export default Routes;