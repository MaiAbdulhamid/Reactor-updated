import user from 'user'
import { Redirect } from 'react-router-dom'

export default function alreadyLogged(){
  if(user.isLoggedIn()){
    return <Redirect to='/users' />
  }
}
