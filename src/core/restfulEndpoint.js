import endpoint from "./endpoint";

class RestfulEndpoint {
  /**
   * set the main module route
   * i.e /users
   * 
   * @var {String}
   */
  route = ''

  /**
   * fetch records from endpoint Api
   * 
   * @param {object} params 
   * @returns {Promise}
   */
  list(params){
    console.log(route);
  }

  /**
   * fetch one record from endpoint Api
   * 
   * @param {number} id
   * @param {object} params 
   * @returns {Promise}
   */
  get(id, params){

  }

  /**
   * Create new record
   * 
   * @param {Object | FormData} data 
   * @returns {Promise}
   */
  post(data){

  }

  /**
   * Update existing record
   * 
   * @param {number} id
   * @param {Object | FormData} data 
   * @returns {Promise}
   */
  put(id, data){

  }

  /**
   * Delete existing record
   * 
   * @param {number} id
   * @returns {Promise}
   */
  delete(id){

  }
}

export default RestfulEndpoint 
