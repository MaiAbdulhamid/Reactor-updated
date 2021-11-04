import { Link } from 'react-router-dom';
import ReactorComponent from "core/component/reactorComponent";
import config from 'core/config';


class Users extends ReactorComponent {
  state = {
    number: 1
  }
  render() {
    return (
      <div>
        <Link to="/" >Go to home</Link>
        <h1>Hello {config.get('name.first')}</h1>
        <p>Number is : {this.state.number}</p>
      </div>
    )
  }
}
export default Users