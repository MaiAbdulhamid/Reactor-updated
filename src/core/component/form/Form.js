import events from '@flk/events'
import ReactorComponent from "core/component/reactorComponent";

class Form extends ReactorComponent {
  isValidForm = true
  /**
   * Submit form
   * @param {*} e 
   */
  submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    this.isValidForm = true; // Make sure that it's reset
    // Validate all inputs
    events.trigger('form.validation', this)
    // prevent Submit if the form is not valid
    if(!this.isValidForm) return;

    if(this.props.onSubmit){
      let formElement = e.target
      this.props.onSubmit(e, formElement)
    }
  }
  /**
   * {@inheritDoc}
   */
  render() {
    return (
      // noValidate => Prevent the browser's default validation
      <form noValidate={true} onSubmit={this.submit}>
        {this.props.children}
      </form>
    )
  }
}
export default Form
