import "./login.scss";
import ReactorComponent from "core/component/reactorComponent";
import Form from "core/component/form/Form";
import FormInput from "core/component/form/FormInput"
import { title, description } from "core/metadata";
import { login } from "modules/users/services/auth";
import user from "user";
import { navigateTo } from "core/routerServiceProvider"
import cache from "core/cache";
 
class Login extends ReactorComponent {
  /**
   * {@inheritdoc}
   */
  state = {};

  /**
   * {@inheritdoc}
   */
  init(){
    title('Login Page')
    description('Welcome to Login Page Form.')
    //cache.set('user', {name: 'Mai', id: 1, age: 27})
  }

  /**
   * submit form
   * @param {*} e 
   */
  handleSubmit = async (e) => {
    this.set('errors', null)
    try {
      let { data } = await login(e.target)
      user.login(data.user)
      navigateTo('/users')
    } catch (error) {
      let errorMessage = error.response.data.error;
      this.set('errors', errorMessage)
    }
  }

  /**
   * {@inheritdoc}
   */
  render() {
    return (
      <div id="login-page">
        <h2>Login Page</h2>
        
        <Form onSubmit={this.handleSubmit}>
          {this.get('errors') && <div className="error-message">{this.get('errors')}</div>}
          <FormInput 
            type="email"
            className="form-control"
            placeholder="Enter Email Address"
            name="email"
            required
          />
          <FormInput
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
            required
          />
          <div id="button-wrapper">
            <button className="btn">Login</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
