import serviceProviderContainer from "./serviceProviderContainer";
import routerServiceProvider from './routerServiceProvider'

export default class Reactor {
  internalServiceProviders = [
    routerServiceProvider,
  ]
  constructor () {
    serviceProviderContainer.internalServiceProviders(this.internalServiceProviders)
  }
  /**
   * Register the entire application ServiceProviders
   * @param {array} serviceProviders
   */
  registerServiceProviders(serviceProviders){
    serviceProviderContainer.register(serviceProviders);
  }
  /**
   * Start the Application
   */
  react(){
    // Start calling all service Providers
    serviceProviderContainer.dispatch()
  }
}