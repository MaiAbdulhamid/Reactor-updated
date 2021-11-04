import Login from './components/Login'
import Users from './components/Users'
import user from 'user'
import { Redirect } from 'react-router-dom'

function isLoggedIn (route, history){
  if( !user.isLoggedIn() ){
    return <Redirect to='/login' />
  }
}

function alreadyLogged(){
  if(user.isLoggedIn){
    return <Redirect to='/users' />
  }
}

export default function(route) {
  route('/login', Login, alreadyLogged)
  route('/users', Users, isLoggedIn)

}