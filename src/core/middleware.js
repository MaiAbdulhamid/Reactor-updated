import Is from '@flk/supportive-is';
import React from 'react'

export default function Middleware(props) {
  let { route, history } = props
  console.log(props);
  let middlewareList = route.middleware

  if(middlewareList){

    if(!Is.array(middlewareList)){
      middlewareList = [middlewareList]
    }

    for (let middleware of middlewareList){
      let output = middleware(route, history)

      if(output){
        return output
      }
    }

  }
  return <route.component history={history}/>

}
