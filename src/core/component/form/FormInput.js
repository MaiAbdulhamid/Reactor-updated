import events from "@flk/events"
import Is from "@flk/supportive-is";
import React from "react";
import ReactorComponent from "core/component/reactorComponent";

class FormInput extends ReactorComponent {
  state = {
    validationError: null
  }

  errorMessages = {
    required: 'This felid is required',
    email: 'Invalid Email Address'
  }
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    events.on('form.validation', form => {
      //Validate the input
      this.validateInput({
        target: this.input
      })

      if(this.get('validationError')){
        form.isValidForm = false
      }
    })
  }
  /**
   * {@inheritdoc}
   */
  ready(){
    this.input = this.inputRef.current;
  }
  /**
   * Validate Input
   * @param {*} e 
   */
  validateInput = e => {
    let input = e.target,
      value = input.value;

    //reset Validation Input
    let validation = null;

    // Check if input is Empty
    if (this.props.required && Is.empty(value)) {
      validation = this.errorMessages.required;
    }

    // Check if email is a Validate email
    // It happens when there are no previous errors
    if (this.props.type === 'email' && validation === null && !Is.empty(value)) {
      if (!Is.email(value)) {
        validation = this.errorMessages.email;
      }
    }

    this.set("validationError", validation);
  }
  /**
   * {@inheritDoc}
   */
  render() {
    return (
      <div className='form-group'>
        <input
          ref={this.inputRef}
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          placeholder={this.props.placeholder}
          onInput={this.validateInput}
        />
        {this.get("validationError") && (
          <label className="error">{this.get("validationError")}</label>
        )}
      </div>
    )
  }
}
export default FormInput