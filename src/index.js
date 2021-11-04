import "shared/config"
import Reactor from "core/reactor"

// Grab all service Providers from all Modules
import UsersServiceProvider from 'modules/users/serviceProvider'
import CategoriesServiceProvider from 'modules/categories/serviceProvider'

const reactor = new Reactor()

reactor.registerServiceProviders([
  //Register all service providers List
  UsersServiceProvider,
  CategoriesServiceProvider,
])

// Start the Application
reactor.react()
