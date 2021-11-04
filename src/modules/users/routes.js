import Login from './components/Login'
import Users from './components/Users'
import Guardian from './middleware/guardian'
import ReverseGuardian from './middleware/reverse-guardian'

export default function(route) {
  route('/login', Login, [Guardian])
  route('/users', Users, [ReverseGuardian])
}