
export default {
  /**
   * Set the storage engine
   */
  storage: localStorage,
  /**
   * Set the data to the storage engine
   * @param {string} key 
   * @param {string} value 
   */
  set(key, value){
    this.storage.setItem(key, JSON.stringify({
      data: value
    }))
  },
  /**
   * Get the data from the storage engine
   * @param {string} key
   * @returns {any}
   */
  get(key){
    let value = this.storage.getItem(key)
    return value ? JSON.parse(value).data : null
  },
  /**
   * Remove item from the storage engine
   * @param {string} key
   */
  remove(key){
    this.storage.removeItem(key)
  }
}