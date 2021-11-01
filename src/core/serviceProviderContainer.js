// A container to Service Providers

let serviceProviders = [] // A Private Variable

// Created Service provider Objects
const resolvedServiceProvider = []

// All Services that will be provided to the module
const serviceContainer = {}

function internalServiceProviders(serviceProviders){
  for (let serviceProvider of serviceProviders){
    let provider = serviceProvider.provider,
        {name, call} = provider;

    serviceContainer[name] = call
  }
}

/**
 * Register The service Provider witch is given
 * @param {array} serviceProviderList
 */

function register(serviceProviderList) {
  serviceProviders = serviceProviderList
}

/**
 * Start Calling All service Providers
 */
function dispatch(){
  for (let serviceProvider of serviceProviders){
    const provider = new serviceProvider(serviceContainer); //Calling the function or class
    resolvedServiceProvider.push(provider)
  }
}

export default {
  register,
  dispatch,
  internalServiceProviders,
}