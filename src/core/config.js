import { Obj } from "reinforcements"

let configurationsList = {}
const config = {
  /**
   * Set the of giving key/value in our configuration list
   * @param {string} key
   * @param {any} value
   * @returns void
   */
  set (key, value){
    //case one: One argument only is passed and is object
    if(arguments.length === 1){
      let data = key
      configurationsList = Object.assign(configurationsList, data)
    }else{
      configurationsList[key] = value
    }
  },
  /**
   * Get the value of given key, otherwise return the default given value
   * @param {string} key
   * @param {any} defaultValue
   * @returns any
   */
  get(key, defaultValue = null){
    return Obj.get(configurationsList, key, defaultValue)
  }
}

export default config