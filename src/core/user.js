import cache from "core/cache"

class User {
  constructor(){
    this.userData = cache.get('user')
  }
  /**
   * Check if the user is logged in
   * 
   * @returns {boolean}
   */
  isLoggedIn(){
    return this.userData !== true
  }
  /**
   * Log in the user
   * It just store the user data into the storage engine i.e local storage
   * It does'nt make the ajax requests
   * 
   * @param {object} userData
   * @returns {void}
   */
  login(userData){ 
    this.userData = userData
    cache.set('user', userData)
  }
}

export default new User