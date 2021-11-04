import ReactDOM from "react-dom"
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import Middleware from "./middleware";

// Custom History
const history = createBrowserHistory()

// Register all routes
const routesList = []

/**
 * Add new route to routesList
 * @param {string} path 
 * @param {React.Component} component
 * @param {function | array | null} middleware
 */
function addRouter(path, component, middleware = null){
  routesList.push({
    path,
    component,
    middleware
  })
}
/**
 * Navigate to given path
 * 
 * @param {string} path
 */
export function navigateTo(path) {
  history.push(path)
}
/**
 * return all Application's routes
 * @returns {array}
 */

function Routes() {
  /**
   * Each route contains:
   * path: the path to page
   * component: that will be rendered by the path
   * middleware: applied before accessing the component page
   */
  const routes = routesList.map((route, index) => (
    <Route key={index} exact={true} path={route.path} comp={route.component}>
      <Middleware route={route} history={history} />
    </Route>
  ))
  return (
    <Router history={history} >
      <Switch>
        {routes}
      </Switch>
    </Router>
  )
}

function scan(){
  ReactDOM.render(
    <Routes />,
    document.getElementById('root')
  );
}

export default {
  scan,
  provider: {
    name: 'route',
    call: addRouter,
  }
}