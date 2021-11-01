// Register all routes
const routesList = []

function addRouter(path, component){
  routesList.push({
    path,
    component
  })
}

export default {
  provider: {
    name: 'route',
    call: addRouter,
  }
}