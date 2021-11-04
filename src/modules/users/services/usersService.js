import React, { Component } from 'react'
import RestfulEndpoint from 'core/restfulEndpoint'

class UsersService extends RestfulEndpoint {
  route = '/users'
}
export default new UsersService