import Users from './components/Users'

export default function(route) {
  route('/users', Users)
  console.log('Users Service Provider.')
}