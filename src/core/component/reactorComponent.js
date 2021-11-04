import { Component } from 'react'
import { Obj } from 'reinforcements'

class ReactorComponent extends Component {
  /**
   * Triggered before rendering the component into DOM for the first time,
   * This method should be used instead of constructor for doing certain requests/actions
   * @memberof ReactorComponent
   */
  init(){}

  constructor(props){
    super(props)
    this.init()
  }
  /**
   * Triggered after the component is rendered,
   *  Triggered one Time, when the component is rendered for the first time
   * @alias componentDidMount
   * @memberof ReactorComponent
   */
   ready(){}

   /**
    * {@inheritdoc}
    */
   componentDidMount(){
     this.ready()
   }

   /**
    * Triggered before the component is rendered again,
    * must return null or the updated state object
    * @param {object} props
    * @param {object} state
    * @alias getSnapshotBeforeUpdate
    * @memberof ReactorComponent
    */
   beforeUpdating(props, state){}

   /**
    * {@inheritdoc}
    */
   getSnapshotBeforeUpdate(props, state){
     let data = this.beforeUpdating(props, state)
     return data || null
   }

   /**
    * Triggered after the component is rendered again
    * @param {object} props
    * @param {object} state
    * @param snapshot is the returned value from getSnapshotBeforeUpdate method
    * @alias componentDidUpdate
    * @memberof ReactorComponent
    */
   onUpdate(props, state, snapshot){}

   /**
    * {@inheritdoc}
    */
   componentDidUpdate(props, state, snapshot){
     this.onUpdate(props, state, snapshot)
   }

   /**
    * Triggered before the component is destroyed
    * @alias componentWillUnmount
    * @memberof ReactorComponent
    */
   destroy(){}

   /**
    * {@inheritdoc}
    */
   componentWillUnmount(){
     this.destroy()
   }
   
  /**
   * set the given value to its corresponding key of state object,
   * the key here is dot notation basis
   * @param {string} key 
   * @param {*} value 
   */
  set(key, value){
    this.setState(
      Obj.set(this.state, key, value)
    )
  }

  /**
   * Get the value of given dot notation key from state object
   * @param {string} key 
   * @param {*} $default 
   * @returns {*}
   */

  get(key, $default = null){
    return Obj.get(this.state, key, $default)
  }
}
export default ReactorComponent