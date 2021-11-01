import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Register all routes
const routesList = []

/**
 * Add new route to routesList
 * @param {string} path 
 * @param {React.Component} component 
 */
function addRouter(path, component){
  routesList.push({
    path,
    component
  })
}

function Routes() {
  const routes = routesList.map((route, index) => (
    <Route key={index} exact={true} path={route.path} component={route.component}></Route>
  ))
  return (
    <Router>
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